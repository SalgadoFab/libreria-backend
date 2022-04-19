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
module.exports = mongoose.model('MedioPago', schemaUsuario, 'mediosPago');