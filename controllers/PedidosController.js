const res = require('express/lib/response');
const { Usuario } = require('../models/index');
const { Pelicula } = require('../models/index');
const { Pedido } = require('../models/index');
const PedidosController = {};

//FUNCIONES DEL CONTROLADOR DE PEDIDOS.

// Función de crear pedidos.
PedidosController.realizarPedidos = () => {
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
    Pelicula.findAll()
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