const res = require('express/lib/response');
const { Usuario } = require('../models/index');
const { Pelicula } = require('../models/index');
const { Pedido } = require('../models/index');
const PedidosController = {};

//FUNCIONES DEL CONTROLADOR DE PEDIDOS.

// Funcion de busqueda de pedidos por Usuario ID.
PedidosController.verPorId = (req, res) => {
    //Búsqueda buscando una Id
    Pedido.findAll({
        where: { usuarioId: req.params.id },
    })
    .then(data => {
        res.send(data)
    });
};

// Función de mostrar los Pedidos de Un Usuario en concreto En crudo. USUARIO
PedidosController.mostrarPedidosUsuario = async (req,res) => {
    let id = req.params.id
    let consulta = `SELECT usuarios.nombre AS nombre, peliculas.titulo AS titulo , peliculas.popularidad AS popularidad, usuarios.nick AS nick, usuarios.email AS email, peliculas.imagen AS imagen
    FROM usuarios INNER JOIN pedidos 
    ON usuarios.id = pedidos.usuarioId INNER JOIN peliculas
    ON peliculas.id = pedidos.peliculaId WHERE usuarios.id = ${id}`;
    let resultado = await Pedido.sequelize.query(consulta,{
        type: Pedido.sequelize.QueryTypes.SELECT});
    if(resultado){
        res.send(resultado);
    }
}

// Función de mostrar los Pedidos de Todos los Usuarios En crudo. ADMINISTRADOR
PedidosController.mostrarPedidosAdministrador = async (req,res) => {
    let consulta = `SELECT usuarios.nombre AS nombre, peliculas.titulo AS titulo , peliculas.popularidad AS popularidad, usuarios.nick AS nick, usuarios.email AS email, peliculas.imagen AS imagen
    FROM usuarios INNER JOIN pedidos 
    ON usuarios.id = pedidos.usuarioId INNER JOIN peliculas
    ON peliculas.id = pedidos.peliculaId;`; 
    let resultado = await Pedido.sequelize.query(consulta,{
        type: Pedido.sequelize.QueryTypes.SELECT});
    if(resultado){
        res.send(resultado);
    }
}

// Función de crear pedidos.
PedidosController.realizarPedidos = (req, res) => {
    let body = req.body;
    Pedido.create({
        precio: body.precio,
        peliculaId: body.peliculaId,
        usuarioId: body.usuarioId,
        fecha: body.fecha
    })
    .then(pedido => {
        if(pedido){
            res.send(pedido)
        }else{
            res.send("El nuevo pedido no se a podido realizar");
        }
    })
    .catch((error =>{
        res.send(error)
    }))
};

// Función de mostrar todos los Pedidos realizados.
PedidosController.mostrarPedidos = (req, res) => {
    Pedido.findAll()
    .then(data => {
        res.send(data)
    });
};

// Función de borrar un pedido por ID.
PedidosController.borrarPorId = async(req, res) => {
    let id = req.params.id;
    try{
        Pedido.destroy({
            where : { id : id },
            truncate : false
        })
        .then(pedidoBorrado =>{
            console.log(pedidoBorrado);
            res.send(`El pedido con la id ${id} ha sido eliminado`);
        })
    } catch(error){
        res.send (error);
    }
}

module.exports = PedidosController;