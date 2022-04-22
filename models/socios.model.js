'use strict';

//Importantamos la libreria de mongoose
const mongoose = require('mongoose');

//Creamos el esquema de los datos del socio
const schemaSocio = new mongoose.Schema({
    nombre: { type: String, required: true },
    imgSocio: { type: Image, required: true },
    direccion: { type: String, required: true },
    telefono: { type: Number, required: true },
    correo: { type: String, required: true, unice: true },

    // ¿  codigo : {type: Number, required: true},     como hacemos con el código Berny?


});
module.exports = mongoose.model('Socio', schemaSocio, 'socios');