'use strict';

//Importantamos la libreria de mongoose
const mongoose = require('mongoose');

//Creamos el esquema de los datos del usuario 
const schemaUsuario = new mongoose.Schema({
    primerNombre : {type: String, required:true},
    segundoNombre : {type: String, required:true},
    primerApellido : {type: String, required:true},
    segundoApellido : {type: String, required:true},
    tipoIndentificacion : {type : Number, required:true},
    indentificacion : {type : String, required:true, unique: true},
    provincia : {type : String, required:true},
    canton : {type : String, required:true},
    distrito : {type : String, required:true},
    direccion : {type : String, required:true},
    genero : {type: Number, required: true},
    rol : {type: Number, required: true},
    correo : {type : String, required:true, unique: true},
    password : {type : String, required:true},
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

*/

//Conversion del esquema al modelo
//Parametros recibidos: (Nombre del Modelo ,  Nombre del Esquema  , Coleccion de Datos en DB )
module.exports = mongoose.model('Usuario', schemaUsuario, 'usuarios');
