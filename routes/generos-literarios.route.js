'use strict';

const express = require('express'); //Importamos la libreria Express para tener acceso a protocolos http
const router = express.Router(); //Define los endpoints para el manejo de datos
const genero = require('../models/generos-literarios.model') //Importamos el modelo del genero

//Endpoints
router.post('/registrar-genero', (request, response) => {
    //Obtenemos los datos del genero que vienen en el request 
    let nuevoGenero = new genero({
        nombreGenero: request.body.nombreGenero,
        codigoGenero: request.body.codigoGenero,
        estado: 1,

    });

    //Guardamos el genero
    nuevoGenero.save((error) => {
        if (error) {
            response.json({
                mensaje: 'Error al registrar Género Literario',
                error
            })
        } else {
            response.json({
                mensaje: 'Registro Exitoso',
            })
        }
    });
}); //Ruta para registrar un género

router.get('/obtener-generos', (request, response) => {
    genero.find((error, lista) => {
        if (error) {
            response.json({
                msj: 'No se pudo listar genero',
                error
            });
        } else {
            response.json({
                lista
            });
        }
    });
}); //Ruta para obtener todos los generos

router.get('/obtener-genero', (request, response) => {}); //Ruta para obtener un solo genero

router.put('/actualizar-genero', (request, response) => {}); //Ruta para actualizar genero

router.delete('/eliminar-genero', (request, response) => {}); //Ruta para eliminar genero


//Middleware
module.exports = router;