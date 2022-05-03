'use strict';

const express = require('express'); //Importamos la libreria Express para tener acceso a protocolos http
const router = express.Router(); //Define los endpoints para el manejo de datos
const Socio = require('../models/socios.model'); //Importamos el modelo del socio

//Endpoints
router.post('/registrar-socio', (request, response) => {

    //Obtenemos los datos del socio comercial que vienen en el request 
    let nuevoSocio = new Socio({
        nombre: request.body.nombre,
        logo: request.body.logo,
        codigo: request.body.codigo,
        direccion: request.body.codigo,
        estado: 1,
    });

    //Guardamos el socio comercial
    nuevoSocio.save((error) => {
        if (error) {
            response.json({
                mensaje: 'Error al registrar socio',
                error
            })
        } else {
            response.json({
                mensaje: 'Registro Exitoso',
            })
        }
    });
    
}); //Ruta para registrar un socio comercial

router.get('/obtener-socios', (request, response) => {
    Socio.find((error, lista) => {
        if (error) {
            response.json({
                msj: 'no se pudo consultar el listado de usuarios',
                error

            });
        } else {
            response.json({
                msj: 'usuarios listados correctamente',
                lista
            });

        }

    });
}); //Ruta para obtener todos los socios comerciales

router.get('/obtener-socio', (request, response) => {}); //Ruta para obtener un solo socio comercial
router.put('/actualizar-socio', (request, response) => {}); //Ruta para actualizar socio comercial
router.delete('/eliminar-socio', (request, response) => {}); //Ruta para eliminar socio comercial


//Middleware
module.exports = router;