'use strict';

//Importantamos la libreria de mongoose
const mongoose = require('mongoose');

//Creamos el esquema de los datos del autor 
const schemaFactura = new mongoose.Schema({

    factura: { type: String, required: true },
    usuario: { type: String, required: false },
    usuarioCorreo: { type: String, required: true },
    items: { type: String, required: false },
    tipoRetiro: { type: String, required: false },
    provinciaEnvio: { type: String, required: false },
    cantonEnvio: { type: String, required: false },
    distritoEnvio: { type: String, required: false },
    direccionEnvio: { type: String, required: false },
    fecha: { type: String, required: true },
    hora: { type: String, required: true },
    totalPago: { type: String, required: true }

});

module.exports = mongoose.model('factura', schemaFactura, 'Facturas');