
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");
const UsuarioController = require('../controllers/UsuarioController');

//AQUI ES DONDE CREAMOS LAS RUTAS DE LAS FUNCIONES DE USUARIOCONTROLLER.

// Endpoint de lista de todos los Usuarios.
router.get('/', auth, UsuarioController.verTodos);
// http://localhost:5000/usuarios/

// Endpoint de busqueda de un Usuario por ID.
router.get('/:id', auth, UsuarioController.verPorId);
// http://localhost:5000/usuarios/id

// Endpoint de registrar Usuario.
router.post('/', UsuarioController.registraUsuario);
// http://localhost:5000/usuarios/registro

// Endpoint de Login de Usuario.
router.post('/login', UsuarioController.loginUsuario);
// http://localhost:5000/usuarios/login

// Endpoint de Modificar el perfil por ID.
router.put('/:id', auth, UsuarioController.perfilUsuario);
// http://localhost:5000/usuarios/:id

// Endpoint de borrar todos los Usuarios.
router.delete('/', auth, UsuarioController.borrarTodo);
// http://localhost:5000/usuarios/

// Endpoint de eliminar un Usuario por ID.
router.delete('/:id', auth, isAdmin, UsuarioController.borrarPorId);
// http://localhost:5000/usuarios/:id














module.exports = router;