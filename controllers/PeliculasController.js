
const { default: axios } = require("axios");
const { Pelicula } = require('../models/index');
const PeliculasController = {};

//FUNCIONES DEL CONTROLADOR DE PELICULAS.

// Función de mostrar todas las peliculas de la base de datos.
PeliculasController.verTodas = (req, res) => {
    // Búsqueda trayendo todas las peliculas
    Pelicula.findAll()
    .then(data => {
        res.send(data)
    });
};

// Función buscar peliculas por titulo de la base de datos.
PeliculasController.peliculasTitulo = (req, res) => {
    //Búsqueda comparando un campo
    Pelicula.findAll({ where : { titulo : req.params.titulo }})
    .then(data => {
        res.send(data)
    });
};

// Función buscar peliculas por id de la base de datos.
PeliculasController.verPorId = (req, res) => {
    //Búsqueda buscando una Id
    Pelicula.findByPk(req.params.id)
    .then(data => {
        res.send(data)
    });
};

// Función de borrar todas las peliculas de la base de datos.
PeliculasController.borrarTodo = async (req, res) => {
    try {
        Pelicula.destroy({
            where : {},
            truncate : false
        })
        .then(peliculasEliminadas => {
            res.send(`Se han eliminado ${peliculasEliminadas} peliculas`);
        })
    } catch (error) {
        res.send(error);
    }
};

// Función de borrar peliculas por ID de la base de datos.
PeliculasController.borrarPorId = async(req, res) => {
    let id = req.params.id;
    try{
        Pelicula.destroy({
            where : { id : id },
            truncate : false
        })
        .then(peliculaBorrada =>{
            console.log(peliculaBorrada);
            res.send(`La pelicula con la id ${id} ha sido eliminada`);
        })
    } catch(error){
        res.send (error);
    }
};

// Función de traernos 60 Peliculas de TMDB a nuestra base de datos.
PeliculasController.traerPeliculas = async(req, res) => {
        //Random number between two limits function
        const minMaxRoundedRandom = (min, max) => {
            return Math.round(Math.random() * (max - min) + min);
        }
        ///Variable para guardar el root para ver el póster
        let TMDBimgUrlRoot = "https://image.tmdb.org/t/p/original";
        //Endpoint para traerme una página entera de películas. Necesario para tenerlo una primera vez
        let firstScan = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        //bucle para recorrer 25 páginas de resultados. El valor de page lo saco de una función random para que no siempre muestre las mismas páginas.
        for(let j=1 ; j<=3 ; j++) {
            let resultss = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${minMaxRoundedRandom(1, 25)}&with_watch_monetization_types=flatrate`);
            //Saco el número de resultados por página para meterselo al siguiente bucle
            let numbOfResultsPerPageTMDB = resultss.data.results.length
            //Recorro cada elemento de la página para ir guardándolo acorde a los campos de mi BBDD
            for(let i=0; i<numbOfResultsPerPageTMDB ; i++) {
                //Por cada iteración creo un elemento
                Pelicula.create({
                    //A la izquierda mis campos de mi BBDD
                    //A la derecha los campos que devuelve TMDB
                    titulo : resultss.data.results[i].original_title,
                    sinopsis : resultss.data.results[i].overview,
                    adultos : resultss.data.results[i].adult,
                    popularidad : resultss.data.results[i].popularity,
                    imagen : (TMDBimgUrlRoot + "/" + resultss.data.results[i].poster_path),
                })
            }
        }
        return (`${25} pages have been clonated succesfully, with a total amount of ${500} films`)
};


module.exports = PeliculasController;