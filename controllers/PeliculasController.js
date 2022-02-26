
const { default: axios } = require("axios");
const { Pelicula } = require('../models/index');
const { Op} = require("sequelize");
const { compareSync } = require("bcrypt")
const PeliculasController = {};

//FUNCIONES DEL CONTROLADOR DE PELICULAS.

// Endpoint busqueda titulo
// Endpoint busqueda id
// Endpoint todas las peliculas
// Endpoint filtrar por género
// Endpoint filtrar por actores

// Este endpoint trae los datos de una película si introducimos su titulo.
PeliculasController.peliculasTitulo = async (req, res) => {
    let titulo = req.query.titulo;
    try{
        let resultados = await axios.get(`https://api.themoviedb.org/3/search/company?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${titulo}&page=1`)
        res.send(resultados.data);
    }
    catch(error){
        console.log(error);
    }
}
// Este endpoint trae los datos de una película si introducimos su id.
PeliculasController.peliculasId = async (req, res) => {
    let id = req.query.id;
    try{
        let resultados = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`)
        res.send(resultados.data)
    }
    catch(error){
        console.log(error);
    }
}
// Este endpoint trae todas las peliculas.
PeliculasController.peliculasFull = async (req, res) => {
    try{
        let resultados = await axios.get(``)
        res.send(resultados.data)
    }
    catch(error){
        console.log(error);
    }
}
// Este endpoint filtra la busqueda por género.
PeliculasController.peliculasGenero = async (req, res) => {
    try{
        let resultados = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`)
        res.send(resultados.data)
    }
    catch(error){
        console.log(error);
    }
}
// Este endpoint filtra la busqueda por actores.
PeliculasController.peliculasActor = async (req, res) => {
    let nombre = req.query.nombre;
    try{
        let resultados = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&query=${nombre}&page=1&include_adult=false`)
        res.send(resultados.data)
    }
    catch(error){
        console.log(error);
    }
}

module.exports = PeliculasController;