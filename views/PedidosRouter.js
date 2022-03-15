
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const PedidosController = require('../controllers/PedidosController');

//AQUI ES DONDE CREAMOS LOS ENDPOINTS DE LAS FUNCIONES DE PEDIDOSCONTROLLER.


// Endpoint de busqueda de pedidos por ID.
router.get('/:id', auth, PedidosController.verPorId);
// http://localhost:5000/pedidos/id

// Endpoint de realizar un pedido.
router.post('/', auth, PedidosController.realizarPedidos);
////http://localhost:5000/pedidos

// Endpoint de mostrar los Pedidos realizados.
router.get('/', auth, PedidosController.mostrarPedidos);
////http://localhost:5000/pedidos

// Endpoint de eliminar Pedidos por ID.
router.delete('/:id',auth, PedidosController.borrarPorId);
// http://localhost:5000/pedidos/:id

///////////////////////////////////

// Endpoint de mostrar los Pedidos de Un Usuario en concreto. USUARIO.
router.post('/usuario/:id', PedidosController.mostrarPedidosUsuario);
// http://localhost:5000/pedidos/usuario/:id

// Endpoint de mostrar los Pedidos de Todos los Usuarios. ADMINISTRADOR.
router.post('/admin', PedidosController.mostrarPedidosAdministrador);
// http://localhost:5000/pedidos/admin

//////////////////////////////////


module.exports = router;