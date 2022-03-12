
const { Router } = require('express');
const express = require('express');
const auth = require("../middlewares/auth");
const router = express.Router();
const isAdmin = require("../middlewares/isAdmin");
const PeliculasController = require('../controllers/PeliculasController');

//AQUI ES DONDE CREAMOS LOS ENLACES DE LOS ENDPOINTS DE PELICULASCONTROLLER.

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
router.delete('/', auth, isAdmin, PeliculasController.borrarTodo);
// http://localhost:5000/peliculas/

// Endpoint de eliminar Peliculas por ID.
router.delete('/:id', auth, isAdmin, PeliculasController.borrarPorId);
// http://localhost:5000/peliculas/:id

// Endpoint de traernos 60 Peliculas a nuestra base de datos.
router.post('/traerPeliculas', PeliculasController.traerPeliculas);
// http://localhost:5000/peliculas/traerPeliculas


module.exports = router;