const res = require('express/lib/response');
const { Usuario } = require('../models/index');
const { Pelicula } = require('../models/index');
const { Pedido } = require('../models/index');
const PedidosController = {};

//FUNCIONES DEL CONTROLADOR DE PEDIDOS.

// Funcion de busqueda de pedidos por ID.
PedidosController.verPorId = (req, res) => {
    //Búsqueda buscando una Id
    Pedido.findAll({
        where: { usuarioId: req.params.id },
    })
    .then(data => {
        res.send(data)
    });
};

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