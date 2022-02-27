
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const UsuarioController = require('../controllers/UsuarioController');

//AQUI ES DONDE CREAMOS LAS RUTAS DE LAS FUNCIONES DE USUARIOCONTROLLER.

// Endpoint de Alta de Usuario (Registro).
router.post('/registro', UsuarioController.registraUsuario);
// http://localhost:5000/usuarios/registro

// Endpoint de Modificar el perfil por ID.
router.put('/:id', auth, UsuarioController.perfilUsuario);
// http://localhost:5000/usuarios/:id

// Endpoint de eliminar un Usuario por ID.
router.delete('/:id', auth, UsuarioController.borrarPorId);
// http://localhost:5000/usuarios/:id

// Endpoint de Login de Usuario.
router.post('/login', UsuarioController.loginUsuario);
// http://localhost:5000/usuarios/login

// Endpoint de lista de todos los Usuarios.
router.get('/', auth, UsuarioController.verTodos);
// http://localhost:5000/usuarios/

// Endpoint de busqueda de un Usuario por ID.
router.get('/:id', auth, UsuarioController.verPorId);
// http://localhost:5000/usuarios/id

// Endpoint de borrar todos los Usuarios.
router.delete('/', auth, UsuarioController.borrarTodo);
// http://localhost:5000/usuarios/
















module.exports = router;