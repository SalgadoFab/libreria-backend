'use strict';

const express = require('express'); //Importamos la libreria Express para tener acceso a protocolos http
const router = express.Router(); //Define los endpoints para el manejo de datos
const MedioPago = require('../models/medioPago.model') //Importamos el modelo del libro

//Endpoints
router.post('/medios-pago', (request, response) => {
    //Obtenemos los datos del libro que vienen en el request 
    let nuevoMedioPago = new MedioPago({
        numeroTarjeta: request.body.numeroTarjeta,
        nombreTitular: request.body.nombreTitular,
        fechaExpiracion: request.body.fechaExpiracion,
        ccv: request.body.ccv,

    });

    //Guardamos el medio de pago
    nuevoMedioPago.save((error) => {
        if (error) {
            response.json({
                mensaje: 'Error al registrar el medio de pago',
                error
            })
        } else {
            response.json({
                mensaje: 'Registro Exitoso',
            })
        }
    });
}); //Ruta para registrar un medio de pago

router.get('/obtener-mediosPago', (request, response) => {
    MediosPago.find((error, lista) => {
        if (error) {
            response.json({
                msj: 'No se pudo listar medios de pago',
                error
            });
        } else {
            response.json({
                lista
            });
        }
    });
}); //Ruta para obtener todos los medios de pago

router.get('/obtener-medioPago', (request, response) => {
    MedioPago.find((error, lista) => {
        if (error) {
            response.json({
                msj: 'No se pudo listar libros',
                error
            });
        } else {
            response.json({
                lista
            });
        }
    });
}); //Ruta para obtener un solo medio de pago

router.put('/actualizar-medioPago', (request, response) => {}); //Ruta para actualizar medio de pago

router.delete('/eliminar-medioPago', (request, response) => {}); //Ruta para eliminar medio de pago


//Middleware
module.exports = router;