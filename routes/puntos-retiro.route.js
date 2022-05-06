'use strict';

const express = require('express'); //Importamos la libreria Express para tener acceso a protocolos http
const router = express.Router(); //Define los endpoints para el manejo de datos
const PuntosRetiro = require('../models/puntos-retiro.model') //Importamos el modelo del punto de retiro

//Endpoints
router.post('/registrar-punto', (request, response) => {
    //Obtenemos los datos del punto que vienen en el request 
    let nuevoPunto = new PuntosRetiro({
        socioComercial : request.body.socioComercial,
        direccion : request.body.direccion,
        estado: 1,

    });

    //Guardamos el punto
    nuevoPunto.save((error) => {
        if (error) {
            response.json({
                mensaje: 'Error al registrar punto de retiro',
                error
            })
        } else {
            response.json({
                mensaje: 'Registro Exitoso',
            })
        }
    });
}); //Ruta para registrar un punto de retiro

router.get('/obtener-puntos', (request, response) => {
    PuntosRetiro.find((error, lista) => {
        if (error) {
            response.json({
                mensaje: 'no se pudo consultar el listado',
                error

            });
        } else {
            response.json({
                mensaje: 'listados correctamente',
                lista
            });
        }
    });
}); //Ruta para obtener todos los puntos

router.get('/obtener-punto', (request, response) => {}); //Ruta para obtener un solo punto

router.put('/actualizar-punto', (request, response) => {}); //Ruta para actualizar punto

router.delete('/eliminar-punto', (request, response) => {}); //Ruta para eliminar punto


//Middleware
module.exports = router;