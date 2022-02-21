
const { Router } = require('express');
const express = require('express');
const router = express.Router();
const PeliculasController = require('../controllers/PeliculasController');

//AQUI ES DONDE CREAMOS LOS ENLACES DE LOS ENDPOINTS DE PELICULASCONTROLLER.

//Busqueda de peliculas por titulo.
router.get('/titulo', PeliculasController.peliculasTitulo);
//http://localhost:5000/peliculas/titulo

//Busqueda de peliculas por id.
router.get('/id', PeliculasController.peliculasId);
//http://localhost:5000/peliculas/id

//Este endpoint trae todas las peliculas.
router.get('/full', PeliculasController.peliculasFull);
//http://localhost:5000/peliculas/full

//Este endpoint filtra las peliculas por género.
router.get('/genero', PeliculasController.peliculasGenero);
//http://localhost:5000/peliculas/genero

//Este endpoint filtra las peliculas por actores.
router.get('/actores', PeliculasController.peliculasActor);
//http://localhost:5000/peliculas/actores

module.exports = router;