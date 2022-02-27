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
};

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
};

// Función de Login de usuario

UsuarioController.loginUsuario = (req, res) => {
    let correo = req.body.email;
    let contraseña = req.body.contraseña;
    Usuario.findOne({
        where : {email : correo}
    }).then(Usuario => {
        if(!Usuario){
            res.send("Usuario o contraseña inválido");
        }else {
            //el usuario existe, por lo tanto, vamos a comprobar
            //si el password es correcto
            if (bcrypt.compareSync(contraseña, Usuario.contraseña)) { //COMPARA CONTRASEÑA INTRODUCIDA CON CONTRASEÑA GUARDADA, TRAS DESENCRIPTAR
                console.log(Usuario.contraseña);
                let token = jwt.sign({ usuario: Usuario }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });
                res.json({
                    usuario: Usuario,
                    token: token
                })
            } else {
                res.status(401).json({ msg: "Usuario o contraseña inválidos" });
            }
        };
    }).catch(error => {
        res.send(error);
    })
};

// Función de mostrar listado de todos los Usuarios registrados.
UsuarioController.verTodos = (req, res) => {
    Usuario.findAll()
    .then(data => {
        res.send(data)
    });
};

// Funcion de busqueda de un Usuario por ID.
UsuarioController.verPorId = (req, res) => {
    //Búsqueda buscando una Id
    Pelicula.findByPk(req.params.id)
    .then(data => {
        res.send(data)
    });
};

// Funcion de borrar todos los Usuarios.
UsuarioController.borrarTodo = async (req, res) => {
    try {
        Usuario.destroy({
            where : {},
            truncate : false
        })
        .then(usuariosEliminados => {
            res.send(`Se han eliminado ${usuariosEliminados} usuarios`);
        })
    } catch (error) {
        res.send(error);
    }
};










module.exports = UsuarioController;