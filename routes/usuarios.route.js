'use strict';

const express = require('express'); //Importamos la libreria Express para tener acceso a protocolos http
const router = express.Router(); //Define los endpoints para el manejo de datos
const Usuario = require ('../models/usuarios.model') //Importamos el modelo del usuario

//Endpoints
router.post('/registrar-usuario', (request, response) => {}); //Ruta para registrar un usuario

router.get('/obtener-usuarios', (request, response) => {});  //Ruta para obtener todos los usuario

router.get('/obtener-usuario', (request, response) => {}); //Ruta para obtener un solo usuario

router.put('/actualizar-usuario', (request, response) => {}); //Ruta para actualizar usuario

router.delete('/eliminar-usuario', (request, response) => {}); //Ruta para eliminar usuario


//Middleware
module.exports = router;