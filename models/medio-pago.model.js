'use strict';

//Importantamos la libreria de mongoose
const mongoose = require('mongoose');

//Creamos el esquema de los datos del Medio de Pago 
const schemaMedioPago = new mongoose.Schema({
    numeroTarjeta: { type: Number, required: true },
    nombreTitular: { type: String, required: true },
    fechaExpiracion: { type: String, required: true },
    ccv: { type: Number, required: true },
});



//Conversion del esquema al modelo
//Parametros recibidos: (Nombre del Modelo ,  Nombre del Esquema  , Coleccion de Datos en DB )
module.exports = mongoose.model('MedioPago', schemaMedioPago, 'mediosPago');