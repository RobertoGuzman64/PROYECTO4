
const { default: axios } = require("axios");
const { Pelicula } = require('../models/index');
const { Op } = require("sequelize");
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

module.exports = PeliculasController;