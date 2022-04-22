'use strict';

const express = require('express'); //Importamos la libreria Express para tener acceso a protocolos http
const router = express.Router(); //Define los endpoints para el manejo de datos
const Usuario = require('../models/usuarios.model') //Importamos el modelo del usuario

//Endpoints
router.post('/registrar-parametros-Cantidad-Minima-LibroFan', (request, response) => {
    //Obtenemos los datos del parametro que vienen en el request 
    let CantidadMinimaLibroFan = new Usuario({
        Cantidad: request.body.Cantidad
    });

    //Guardamos los parametros
    CantidadMinimaLibroFan.save((error) => {
        if (error) {
            response.json({
                mensaje: 'Error al registrar la cantidad minima',
                error
            })
        } else {
            response.json({
                mensaje: 'Registro Exitoso',
            })
        }
    });
}); //Ruta para registrar parametros cantidad minima librofan

router.post('/registrar-parametros-Precio-Actual-Por-Envio', (request, response) => {
    //Obtenemos los datos del parametro que vienen en el request 
    let PrecioActualPorEnvio = new Usuario({
        Precio: request.body.Precio
    });

    //Guardamos los parametros
    PrecioActualPorEnvio.save((error) => {
        if (error) {
            response.json({
                mensaje: 'Error al registrar el precio',
                error
            })
        } else {
            response.json({
                mensaje: 'Registro Exitoso',
            })
        }
    });
}); //Ruta para registrar parametros precio actual por envio

router.post('/registrar-parametros-Tarifa-Impuesto-Aplicado', (request, response) => {
    //Obtenemos los datos del parametro que vienen en el request 
    let TarifaImpuestoAplicado = new Usuario({
        Cantidad: request.body.Cantidad
    });

    //Guardamos los parametros
    TarifaImpuestoAplicado.save((error) => {
        if (error) {
            response.json({
                mensaje: 'Error al registrar la tarifa de impuesto',
                error
            })
        } else {
            response.json({
                mensaje: 'Registro Exitoso',
            })
        }
    });
}); //Ruta para registrar parametros cantidad minima librofan

router.post('/registrar-parametros-Tarifa-Descuento-LibroFan', (request, response) => {
    //Obtenemos los datos del parametro que vienen en el request 
    let TarifaDescuentoLibroFan = new Usuario({
        Descuento: request.body.Descuento
    });

    //Guardamos los parametros
    TarifaDescuentoLibroFan.save((error) => {
        if (error) {
            response.json({
                mensaje: 'Error al registrar la tarifa de descuento',
                error
            })
        } else {
            response.json({
                mensaje: 'Registro Exitoso',
            })
        }
    });
}); //Ruta para registrar parametros cantidad minima librofan

router.get('/obtener-parametros', (request, response) => {}); //Ruta para obtener todos los parametros

router.get('/obtener-parametros', (request, response) => {}); //Ruta para obtener un solo parametro

router.put('/actualizar-parametros', (request, response) => {}); //Ruta para actualizar parametro

router.delete('/eliminar-parametros', (request, response) => {}); //Ruta para eliminar parametro


//Middleware
module.exports = router;