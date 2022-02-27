const { Usuario } = require('../models/index');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');
const jwt = require('jsonwebtoken');
const UsuarioController = {};

//FUNCIONES DEL CONTROLADOR DE USUARIOS.

// Función de registro de usuario.
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

// Función de Login de usuario
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

// Función de motrar listado de todos los Usuarios registrados. //
UsuarioController.verTodos = (req, res) => {
    if (req.user.usuario.rol == "administrador") {//COMPROBAMOS SI ESTÁ LOGADO COMO ADMINISTRADOR
        Usuario.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
            err.message || "Ha surgido algún error al intentar acceder a los usuarios."
            });
        });
    }else{
    res.send({
        message: `No tienes permisos para visualizar a todos los usuarios. Contacta con un administrador.`
    });
    }
};

// Funcion de busqueda de un Usuario por ID.
  UsuarioController.verPorId = (req, res) => {
    const id = req.params.id;
    if (req.user.usuario.rol == "administrador" || req.user.usuario.id == id) {// HACEMOS QUE SOLO PUEDA VERLO EL ADMINISTRADOR O EL USUARIO DUEÑO DEL PERFIL
        Usuario.findByPk(id)
            .then(data => {
                if (data) {
                    res.send(data);
                } else {
                    res.status(404).send({
                        message: `No se puede encontrar el usuario con el id ${id}.`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Ha surgido algún error al intentar acceder al usuario con el id " + id
                });
            });
    }else{
    res.send({
        message: `No tienes permisos para acceder al perfil indicado.`
    });
    }
};

// Funcion de borrar todos los Usuarios.
UsuarioController.deleteAll = (req, res) => {
    if (req.user.usuario.rol == "administrador") {// HACEMOS QUE SOLO PUEDA BORRARLO EL ADMINISTRADOR
                usuario.destroy({
                where: {},
                truncate: false
                })
                .then(nums => {
                    res.send({ message: `Se han borrado ${nums} usuarios de la base de datos` });
                })
                .catch(err => {
                    res.status(500).send({
                    message:
                        err.message || "Ha surgido algún error al intentar eliminar a los usuarios."
                    });
                });
    }else{
    res.send({
        message: `No tienes permisos para borrar usuarios. Contacta con un administrador.`
    });
    }
};











module.exports = UsuarioController;