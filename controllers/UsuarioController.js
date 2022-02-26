const { Usuario } = require('../models/index');
const { Op } = require("sequelize");
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

// Función de Alta de usuario ( C )
UsuarioController.registraUsuario = async (req, res) => {
    // Registrando un usuario
        let nombre = req.body.nombre;
        let edad = req.body.edad;
        let apellidos = req.body.apellidos;
        let nick = req.body.nick;
        let email = req.body.email;
        let rol = req.body.rol;
        console.log("antes de encriptar",req.body.contraseña);
        let contraseña = bcrypt.hashSync(req.body.contraseña, Number.parseInt(authConfig.rounds)); 
        console.log("esta es la contraseña", contraseña);
        // Comprobación de errores.....
        // Guardamos en sequelize el usuario
        Usuario.findAll({
            where : {
                [Op.or] : [
                    {
                        email : {
                            [Op.like] : email
                        }
                    },
                    {
                        nick : {
                            [Op.like] : nick
                        }
                    }
                ]
            }
        }).then(datosRepetidos => {
            if(datosRepetidos == 0){
                    Usuario.create({
                    nombre: nombre,
                    edad: edad,
                    apellidos: apellidos,
                    email: email,
                    contraseña: contraseña,
                    nick: nick,
                    rol: rol,
                }).then(usuario => {
                    res.send(`${usuario.nombre}, bienvenid@ a este VideoClub`);
                })
                .catch((error) => {
                    res.send(error);
                });
            }else {
                res.send("El usuario con ese e-mail ya existe en nuestra base de datos");
            }
        }).catch(error => {
            res.send(error)
        });
};

// Función de editar el Perfil.
UsuarioController.perfilUsuario = async (req, res) => {
    // let datos = req.body;
    let id = req.params.id;
    try {
        Usuario.update(datos, {
            where: {id : id}
        })
        .then(actualizado => {
            res.send(actualizado);
        });
    } catch (error) {
        res.send(error);
    }
}

// Función de dar de Baja un usuario.

















module.exports = UsuarioController;