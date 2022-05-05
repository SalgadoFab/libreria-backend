'use strict';

//Importantamos la libreria de mongoose
const mongoose = require('mongoose');

//Creamos el esquema de los datos del usuario 
const puntosRetiro = new mongoose.Schema({
    socioComercial: { type: String, required: true },
    //logoSocio: { type: String,},
    direccion: { type: String, required: true },
    estado: { type: Number, required: true }
});

//Conversion del esquema al modelo
//Parametros recibidos: (Nombre del Modelo ,  Nombre del Esquema  , Coleccion de Datos en DB )
module.exports = mongoose.model('puntos-retiro', puntosRetiro, 'PuntosRetiro');