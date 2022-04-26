'use strict';

//Importantamos la libreria de mongoose
const mongoose = require('mongoose');

//Creamos el esquema de los datos de direccion de envio
const schemaDireccionEnvio = new mongoose.Schema({
    provincia: { type: String, required: true },
    canton: { type: String, required: true },
    distrito: { type: String, required: true },
    direccion: { type: String, required: true },
    //direccion en mapa pendiente
    estado: { type: Number, required: true },
});

//Conversion del esquema al modelo
//Parametros recibidos: (Nombre del Modelo ,  Nombre del Esquema  , Coleccion de Datos en DB )
module.exports = mongoose.model('DireccionEnvio', schemaDireccionEnvio, 'direccionEnvios');