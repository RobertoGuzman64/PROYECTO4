
// const { Usuario } = require('../models/index');
// const bcrypt = require('bcrypt');
// const authConfig = require('../config/auth');
// const jwt = require('jsonwebtoken');
const UsuarioController = {};

//FUNCIONES DEL CONTROLADOR DE USUARIOS.

// Endpoint de Alta de usuario ( C )
// Endpoint de Perfil ( R )
// Endpoint de Baja de usuario ( D )
// Endpoint de Login de usuario
// Uso de JWT TOKEN
// Distintos roles: ADMINISTRADOR y CLIENTE

// Función de Alta de usuario ( C )
UsuarioController.registraUsuario = async (req, res) => {
    //Registrando un usuario
    try {
        let name = req.body.name;
        let age = req.body.age;
        let surname = req.body.surname;
        let nickname = req.body.nickname;
        let email = req.body.email;
        console.log("antes de encriptar",req.body.password);
        let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds)); 
        console.log("este es el password", password);
        //Comprobación de errores.....
        //Guardamos en sequelize el usuario
        Usuario.create({
            name: name,
            age: age,
            surname: surname,
            email: email,
            password: password,
            nickname: nickname
        }).then(usuario => {
            res.send(`${usuario.name}, bienvenida a este infierno`);
        });
    } catch (error) {
        res.send(error);
    }
    
};


module.exports = UsuarioController;