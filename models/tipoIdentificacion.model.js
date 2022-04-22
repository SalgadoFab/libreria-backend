'use strict';

//Importantamos la libreria de mongoose
const mongoose = require('mongoose');

//Creamos el esquema de los datos del usuario 
const tiposIdentificacion = new mongoose.Schema({
    codigoIdentificacion: { type: Number, required: true, unique: true },
    nombreIdentificacion: { type: String, required: true, unique: true },
    digitos: { type: Number, required: true }
});

//Conversion del esquema al modelo
//Parametros recibidos: (Nombre del Modelo ,  Nombre del Esquema  , Coleccion de Datos en DB )
module.exports = mongoose.model('Identificacion', tiposIdentificacion, 'identificacion');