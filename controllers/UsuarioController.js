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

// Función de dar de Baja un usuario dado su número ID.
UsuarioController.borrarPorId = async(req, res) => {
    let id = req.params.id;
    try{
        Usuario.destroy({
            where : { id : id },
            truncate : false
        })
        .then(usuarioBorrado =>{
            console.log(usuarioBorrado);
            res.send(`El usuario con la id ${id} ha sido eliminado`);
        })
    } catch(error){
        res.send (error);
    }
}

// Endpoint de Login de usuario
UsuarioController.loginUsuario = (req, res) => {
    let correo = req.body.email;
    let contraseña = req.body.contraseña;
    Usuario.findOne({
        where : {email : correo}
    }).then(Usuario =>{
        if(!Usuario){
            res.send("Usuario o contraseña incorrecto");
        }else {
            // El Usuario existe, por lo tanto, vamos a comprobar si la contraseña es correcta.
            if (bcrypt.compareSync(contraseña, Usuario.contraseña)) {
                console.log(Usuario.contraseña);
                let token = jwt.sing({ usuario : Usuario}, authConfig.secret,{
                    expiresIn : authConfig.expires
                });
                res.json({
                    usuario : Usuario,
                    token : token
                })
            }else {
                res.status(401).json({ msg : "Usuario o contraseña incorrecto"});
            }
        }
    }).catch(error =>{
        res.send(error);
    })
}

// Uso de JWT TOKEN
// Distintos roles: ADMINISTRADOR y CLIENTE














module.exports = UsuarioController;