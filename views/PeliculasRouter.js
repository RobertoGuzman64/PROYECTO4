
const { Router } = require('express');
const express = require('express');
const router = express.Router();
const authConfig = require('../config/auth');
const PeliculasController = require('../controllers/PeliculasController');

//AQUI ES DONDE CREAMOS LOS ENLACES DE LOS ENDPOINTS DE PELICULASCONTROLLER.


// ● Endpoint busqueda titulo
// ● Endpoint busqueda id
// ● Endpoint todas las peliculas

// Endpoint de mostrar todas las Peliculas.
router.get('/', PeliculasController.verTodas);
// http://localhost:5000/peliculas/

// Endpoint de busqueda de Peliculas por titulo.
router.get('/titulo/:titulo', PeliculasController.peliculasTitulo);
// http://localhost:5000/peliculas/titulo/:titulo

// Endpoint de busqueda de una pelicula por ID.
router.get('/:id', PeliculasController.verPorId);
// http://localhost:5000/peliculas/id

// Endpoint de borrar todas las Peliculas.
router.delete('/', PeliculasController.borrarTodo);
// http://localhost:5000/peliculas/

// Endpoint de eliminar Peliculas por ID.
router.delete('/:id', PeliculasController.borrarPorId);
// http://localhost:5000/peliculas/:id



// //Busqueda de peliculas por titulo. themoviedb
// router.get('/titulo', PeliculasController.peliculasTitulo);
// //http://localhost:5000/peliculas/titulo

// //Busqueda de peliculas por id. themoviedb
// router.get('/id', PeliculasController.peliculasId);
// //http://localhost:5000/peliculas/id

// //Este endpoint trae todas las peliculas. themoviedb
// router.get('/full', PeliculasController.peliculasFull);
// //http://localhost:5000/peliculas/full

// //Este endpoint filtra las peliculas por género. themoviedb
// router.get('/genero', PeliculasController.peliculasGenero);
// //http://localhost:5000/peliculas/genero

// //Este endpoint filtra las peliculas por actores. themoviedb
// router.get('/actores', PeliculasController.peliculasActor);
// //http://localhost:5000/peliculas/actores

module.exports = router;