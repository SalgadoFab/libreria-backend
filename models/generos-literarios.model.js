'use strict';

//Importantamos la libreria de mongoose
const mongoose = require('mongoose');

//Creamos el esquema de los datos de Géneros Literarios
const schemaGeneros = new mongoose.Schema({
    nombreGenero: { type: String, required: true },
    codigoGenero: { type: String, required: true },
    estado: { type: Number, required: true },
});


/*

    Estado:
        1 : Activo - Por Defecto
        2 : Inactivo  

*/

//Conversion del esquema al modelo
//Parametros recibidos: (Nombre del Modelo ,  Nombre del Esquema  , Coleccion de Datos en DB )
module.exports = mongoose.model('Genero', schemaGeneros, 'generos');