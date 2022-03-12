const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db.js');
const PORT = process.env.PORT || 5000;
const router = require('./router');

let opcionesCors = {//CONFIGURO OPCIONES DE CORS
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};
//Middleware
app.use(express.json()); //PUEDO OBTENER JSON DEL BODY
app.use(cors(opcionesCors));  //USO CORS
app.use(router);

// app.listen(PORT, ()=> console.log(`Servidor levantado en el puerto ${PORT}`));
db.then(()=>{
    app.listen(PORT, ()=> console.log(`Servidor en el puerto ${PORT}`)); //Conectado a la base de datos
})
.catch((err)=> console.log(err.message));


// Reto Backend Movies. API

// Sabías que Netflix, antes de ofertar
// sus servicios en streaming, lo hacía
// de forma Online?

// Alquilabas una película, la cual te
// llegaba de forma física a tu casa a
// los pocos días, cuando acababa tu
// plazo para verla, la devolvías de
// vuelta por correo.
//
// Desde producción nos piden replicar
// dicho servicio, en este caso su parte
// Backend. Let’s go for it!
