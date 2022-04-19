'use strict';

//Importantamos la libreria de mongoose
const mongoose = require('mongoose');

//Creamos el esquema de los datos del Medio de Pago 
const schemaMedioPago = new mongoose.Schema({
    numeroTarjeta: { type: Number, required: true },
    nombreTitular: { type: String, required: true },
    fechaExpiracion: { type: Date, required: true },
    ccv: { type: Number, required: true },
});


/*

    Estado:
        1 : Activo - Por Defecto
        2 : Inactivo  

*/

//Conversion del esquema al modelo
//Parametros recibidos: (Nombre del Modelo ,  Nombre del Esquema  , Coleccion de Datos en DB )
module.exports = mongoose.model('MedioPago', schemaUsuario, 'mediosPago');