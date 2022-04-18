'use strict';

//Importantamos la libreria de mongoose
const mongoose = require('mongoose');

//Creamos el esquema de los datos del autor 
const schemaAutor = new mongoose.Schema({
    nombreAutor: { type: String, required: true },
    nacimiento: { type: Date, required: true },
    defuncion: { type: Date, required: false },
    nacionalidad: { type: String, required: true },
    bibliografia: { type: String, required: true },
    libros: { type: String, required: true },
    annoNobel: { type: Date, required: false },
    estado: { type: Number, required: true },

});

/*
  
    Estado:
        1 : Activo - Por Defecto
        2 : Inactivo  

*/


//Conversion del esquema al modelo
//Parametros recibidos: (Nombre del Modelo ,  Nombre del Esquema  , Coleccion de Datos en DB )
module.exports = mongoose.model('Autor', schemaAutor, 'autores');