
const express = require('express');
const router = express.Router();
const PedidosController = require('../controllers/PedidosController');

//AQUI ES DONDE CREAMOS LOS ENDPOINTS DE LAS FUNCIONES DE PEDIDOSCONTROLLER.

router.post('/', PedidosController.placeNewOrder);

module.exports = router;