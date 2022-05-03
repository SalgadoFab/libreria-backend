'use strict';

//Importantamos la libreria de mongoose
const mongoose = require('mongoose');

//Creamos el esquema de los datos del usuario 
const schemaUsuario = new mongoose.Schema({
    primerNombre: { type: String, required: true },
    segundoNombre: { type: String, required: true },
    primerApellido: { type: String, required: true },
    segundoApellido: { type: String, required: true },
    tipoIdentificacion: { type: String, required: true },
    identificacion: { type: String, required: true, unique: true },
    foto: { type: String, required: false },
    provincia: { type: String, required: true },
    canton: { type: String, required: true },
    distrito: { type: String, required: true },
    direccion: { type: String, required: true },
    genero: { type: Number, required: true },
    correo: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    autoresFavs: { type: Array, required: false },
    generosFavs: { type: Array, required: false },
    rol: { type: Number, required: true },
    estado: { type: Number, required: true },
    libroFan : { type: Number, required: true },
});


/*
    Tipos de Indentificacion: Definidos por el usuario
    Genero: 
        1 : Masculino
        2 : Femenino 
        3 : Indefinido

    Rol: 
        1 : Admin
        2 : Cliente

    Estado:
        1 : Activo - Por Defecto
        2 : Inactivo  

*/

//Conversion del esquema al modelo
//Parametros recibidos: (Nombre del Modelo ,  Nombre del Esquema  , Coleccion de Datos en DB )
module.exports = mongoose.model('Usuario', schemaUsuario, 'Usuarios');