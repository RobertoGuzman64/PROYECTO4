
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const UsuarioController = require('../controllers/UsuarioController');

//AQUI ES DONDE CREAMOS LAS RUTAS DE LAS FUNCIONES DE USUARIOCONTROLLER.

// Endpoint de Alta de usuario ( C )
// Endpoint de Perfil ( R )
// Endpoint de Baja de usuario ( D )
// Endpoint de Login de usuario
// Uso de JWT TOKEN
// Distintos roles: ADMINISTRADOR y CLIENTE

// Endpoint de Alta de usuario ( C )
// Registro
router.post('/registro', UsuarioController.registraUsuario);
// http://localhost:5000/usuarios/registro


// Endpoint de Perfil ( R )
router.put('/perfil', UsuarioController.perfilUsuario);
// http://localhost:5000/usuarios/perfil











module.exports = router;