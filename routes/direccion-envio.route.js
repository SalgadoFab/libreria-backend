'use strict';

const express = require('express'); //Importamos la libreria Express para tener acceso a protocolos http
const router = express.Router(); //Define los endpoints para el manejo de datos
const DireccionEnvio = require('../models/direccion-envio.model'); //Importamos el modelo de dirección de envio

//Endpoints
router.post('/registrar-direccion-envio', (request, response) => {
    //Obtenemos los datos del la direccion de envio que vienen en el request 
    let nuevaDireccionEnvio = new DireccionEnvio({
        provincia: request.body.provincia,
        canton: request.body.canton,
        distrito: request.body.distrito,
        direccion: request.body.direccion,
    });

    //Guardamos la direccion de envio
    nuevaDireccionEnvio.save((error) => {
        if (error) {
            response.json({
                mensaje: 'Error al registrar dirección de envio',
                error
            })
        } else {
            response.json({
                mensaje: 'Registro Exitoso',
            })
        }
    });
}); //Ruta para añadir la dirección de envio

router.get('/obtener-direccion-envios', (request, response) => {}); //Ruta para obtener todas las direcciones de envio
router.get('/obtener-direccion-envio', (request, response) => {}); //Ruta para obtener una sola dirección de envio
router.put('/actualizar-direccion-envio', (request, response) => {}); //Ruta para añadir la dirección de envio
router.delete('/eliminar-direccion-envio', (request, response) => {}); //Ruta para eliminar dirección de envio





//Middleware
module.exports = router;