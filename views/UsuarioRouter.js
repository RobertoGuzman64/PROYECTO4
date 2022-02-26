
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const UsuarioController = require('../controllers/UsuarioController');

//AQUI ES DONDE CREAMOS LAS RUTAS DE LAS FUNCIONES DE USUARIOCONTROLLER.

// Endpoint de Alta de usuario
// Endpoint de Perfil
// Endpoint de Baja de usuario
// Endpoint de Login de usuario
// Uso de JWT TOKEN
// Distintos roles: ADMINISTRADOR y CLIENTE

// Endpoint de Alta de usuario (Registro).
router.post('/registro', UsuarioController.registraUsuario);
// http://localhost:5000/usuarios/registro


// Endpoint de Modificar el perfil.
router.put('/:id', UsuarioController.perfilUsuario);
// http://localhost:5000/usuarios/:id


// Endpoint de eliminar un usuario por ID.
router.delete('/:id', UsuarioController.borrarPorId);
// http://localhost:5000/usuarios/:id


// Endpoint de Login de usuario
router.post('/login', UsuarioController.loginUsuario);
// http://localhost:5000/usuarios/login



// Uso de JWT TOKEN
// Distintos roles: ADMINISTRADOR y CLIENTE



















module.exports = router;