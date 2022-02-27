
const { default: axios } = require("axios");
const { Pelicula } = require('../models/index');
const { Op } = require("sequelize");
const authConfig = require('../config/auth');
const { compareSync } = require("bcrypt")
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
    Pelicula.findOne({ where : { titulo : req.params.titulo }})
    .then(data => {
        res.send(data)
    });
}

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
}







// // Este endpoint trae los datos de una película si introducimos su titulo.themoviedb
// PeliculasController.peliculasTitulo = async (req, res) => {
//     let titulo = req.query.titulo;
//     try{
//         let resultados = await axios.get(`https://api.themoviedb.org/3/search/company?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${titulo}&page=1`)
//         res.send(resultados.data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// // Este endpoint trae los datos de una película si introducimos su id.themoviedb
// PeliculasController.peliculasId = async (req, res) => {
//     let id = req.query.id;
//     try{
//         let resultados = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`)
//         res.send(resultados.data)
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// // Este endpoint trae todas las peliculas.themoviedb
// PeliculasController.peliculasFull = async (req, res) => {
//     try{
//         let resultados = await axios.get(``)
//         res.send(resultados.data)
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// // Este endpoint filtra la busqueda por género.themoviedb
// PeliculasController.peliculasGenero = async (req, res) => {
//     try{
//         let resultados = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`)
//         res.send(resultados.data)
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// // Este endpoint filtra la busqueda por actores.themoviedb
// PeliculasController.peliculasActor = async (req, res) => {
//     let nombre = req.query.nombre;
//     try{
//         let resultados = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&query=${nombre}&page=1&include_adult=false`)
//         res.send(resultados.data)
//     }
//     catch(error){
//         console.log(error);
//     }
// }

module.exports = PeliculasController;