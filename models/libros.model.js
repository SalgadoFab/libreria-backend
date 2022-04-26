'use strict';

//Importantamos la libreria de mongoose
const mongoose = require('mongoose');

//Creamos el esquema de los datos del usuario 
const schemaLibros = new mongoose.Schema({

    //Falta estado, colocar a unique a campos que deben ser unicos

    nombreLibro: { type: String, required: true },
    isbn: { type: String, required: true, unique: true },
    nombreAutor: { type: String, required: true },
    idiomaLibro: { type: String, required: true},
    fechaPublicacion: { type: Date, required: true },
    generoLibro: { type: String, required: true },
    premios: { type: String, required: false },
    precio: { type: Number, required: true },
    libroStock: { type: Number, required: true },
    descuento: { type: Number, required: true },
    resennaLibro: { type: String, required: true },
    estado: { type: Number, required: true },

});


/*
    Estado:
        1 : Activo - Por Defecto
        2 : Inactivo  

*/

//Conversion del esquema al modelo
//Parametros recibidos: (Nombre del Modelo ,  Nombre del Esquema  , Coleccion de Datos en DB )
module.exports = mongoose.model('Libro', schemaLibros, 'libros');