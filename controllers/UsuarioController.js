
const { Usuario } = require('../models/index');
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');
const jwt = require('jsonwebtoken');
const UsuarioController = {};

//FUNCIONES DEL CONTROLADOR DE USUARIOS.

// Endpoint de Alta de usuario ( C )
// Endpoint de Perfil ( R )
// Endpoint de Baja de usuario ( D )
// Endpoint de Login de usuario
// Uso de JWT TOKEN
// Distintos roles: ADMINISTRADOR y CLIENTE





module.exports = UsuarioController;