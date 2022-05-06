'use strict';

//Importantamos la libreria de mongoose
const mongoose = require('mongoose');

const schemaPrecioActualPorEnvio = new mongoose.Schema({
    precioActual: { type: Number, required: true },
    nuevoPrecio: { type: Number, required: true },
});

const schemaTarifaImpuestoAplicado = new mongoose.Schema({
    tarifaActual: { type: Number, required: true },
    nuevoTarifa: { type: Number, required: true },
});

//Conversion del esquema al modelo
//Parametros recibidos: (Nombre del Modelo ,  Nombre del Esquema  , Coleccion de Datos en DB )
module.exports = mongoose.model('PrecioEnvio', schemaPrecioActualPorEnvio, 'PrecioEnvio');
module.exports = mongoose.model('Impuesto', schemaTarifaImpuestoAplicado, 'Impuesto');
