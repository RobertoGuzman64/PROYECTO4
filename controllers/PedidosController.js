const res = require('express/lib/response');
const { Pedido } = require('../models/index');
const PedidosController = {};

//FUNCIONES DEL CONTROLADOR DE PEDIDOS.

// Endpoint crear un pedido
// Endpoint de 1 película por usuario
// Endpoint con fecha de alquiler
// Endpoint con fecha de devolución
// Endpoint de ciudades disponibles.
// Endpoint muestra los pedidos.

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
}


module.exports = PedidosController;