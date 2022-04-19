'use strict';

//Importantamos la libreria de mongoose
const mongoose = require('mongoose');

//Creamos el esquema de los datos del usuario 
const schemaLibros = new mongoose.Schema({
    nombreLibro: { type: String, required: true },
    isbn: { type: String, required: true },
    nombreAutor: { type: String, required: true },
    formatoLibro: { type: String, required: true },
    idiomaLibro: { type: String, required: true, unique: true },
    fechaPublicacion: { type: Date, required: true },
    generoLibro: { type: String, required: true },
    premios: { type: String, required: false },
    precio: { type: Number, required: true },
    libroStock: { type: Boolean, required: true },
    descuento: { type: Number, required: true },
    resennaLibro: { type: String, required: true },

});


/*
    Tipos de Indentificacion: Definidos por el usuario
    Genero: 
        1 : Masculino
        2 : Femenino 
        3 : Indefinido

    Rol:
        1 : Clientes - Rol por defecto para cualquier registro de usuario
        2 : Administrador 

    Estado:
        1 : Activo - Por Defecto
        2 : Inactivo  

*/

//Conversion del esquema al modelo
//Parametros recibidos: (Nombre del Modelo ,  Nombre del Esquema  , Coleccion de Datos en DB )
module.exports = mongoose.model('Libro', schemaUsuario, 'libros');