'use strict';

const express = require('express'); //Importamos la libreria Express para tener acceso a protocolos http
const router = express.Router(); //Define los endpoints para el manejo de datos
const Usuario = require('../models/parametros.model') //Importamos el modelo del usuario

//Endpoints
router.post('/registrar-precio-envio', (request, response) => {

    let nuevoParametroPrecioActualPorEnvio = new Usuario({
        precioActual: request.body.precioActual,
        nuevaPrecio: request.body.nuevaPrecio
    });
    
    //Guardamos los parametros
    nuevoParametroCantidadMinimaLibroFan.save((error) => {
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

    nuevoParametroPrecioActualPorEnvio.save((error) => {
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

    nuevoParametroTarifaImpuestoAplicado.save((error) => {
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

    nuevoParametroTarifaDescuentoLibroFan.save((error) => {
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
}); //Ruta para registrar un parametros

router.get('/obtener-parametros', (request, response) => {}); //Ruta para obtener todos los parametros

router.get('/obtener-parametros', (request, response) => {}); //Ruta para obtener un solo parametro

router.put('/actualizar-parametros', (request, response) => {}); //Ruta para actualizar parametro

router.delete('/eliminar-parametros', (request, response) => {}); //Ruta para eliminar parametro


//Middleware
module.exports = router;