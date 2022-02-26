
const express = require('express');
const router = express.Router();
const PedidosController = require('../controllers/PedidosController');

//AQUI ES DONDE CREAMOS LOS ENDPOINTS DE LAS FUNCIONES DE PEDIDOSCONTROLLER.

// Endpoint crear un pedido
// Endpoint de 1 película por usuario
// Endpoint con fecha de alquiler
// Endpoint con fecha de devolución
// Endpoint de ciudades disponibles.
// Endpoint muestra los pedidos.


// Endpoint crear un pedido
router.post('/', PedidosController.realizarPedidos);
////http://localhost:5000/













module.exports = router;