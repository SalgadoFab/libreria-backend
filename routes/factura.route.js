'use strict';

const express = require('express');
const router = express.Router(); 
const factura = require('../models/factura.model')


router.post('/registrar-factura', (request, response) => {

    let nuevaFactura = new factura({
        factura: request.body.factura,
        usuario: request.body.usuario,
        usuarioCorreo: request.body.usuarioCorreo,
        items: request.body.items,
        tipoRetiro:  request.body.tipoRetiro,
        provinciaEnvio :  request.body.provinciaEnvio,
        cantonEnvio :  request.body.cantonEnvio,
        distritoEnvio :  request.body.distritoEnvio,
        direccionEnvio :  request.body.direccionEnvio,
        fecha: request.body.fecha,
        hora: request.body.hora,
        totalPago: request.body.totalPago,
    });

    nuevaFactura.save((error) => {
        if (error) {
            response.json({
                mensaje: 'Error al procesar la compra',
                error
            })
        } else {
            response.json({
                mensaje: 'Compra Exitosa',
            })
        }
    });
}); 

router.get('/obtener-facturas/:filtro', (request, response) => {

    let correo = request.params.filtro;

    factura.find( { usuarioCorreo: correo }, function(error, lista) {
        if (error) {
            response.json({
                msj: 'No se pudo listar las facturas',
                error
            });
        } else {
            response.json({
                lista
            });
        }
    });
}); //Ruta para obtener todos libros


//Middleware
module.exports = router;