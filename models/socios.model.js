'use strict';

//Importantamos la libreria de mongoose
const mongoose = require('mongoose');

//Creamos el esquema de los datos de Socio Comercial
const schemaSocio = new mongoose.Schema({
    nombre: { type: 'String', required: true },
    codigo: { type: 'Number', required: true },
    direccion: { type: 'String', required: true }
});


//Conversion del esquema al modelo
//Parametros recibidos: (Nombre del Modelo ,  Nombre del Esquema  , Coleccion de Datos en DB )
module.exports = mongoose.model('Socio', schemaSocio, 'Socio');