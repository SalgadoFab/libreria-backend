'use strict';

//Importantamos la libreria de mongoose
const mongoose = require('mongoose');

//Creamos el esquema de los datos del parametro
const schemaCantidadMinimaLibroFan = new mongoose.Schema({
    cantidadActual: { type: Number, required: true },
    nuevaCantidad: { type: Number, required: true },
});

const schemaPrecioActualPorEnvio = new mongoose.Schema({
    precioActual: { type: Number, required: true },
    nuevoPrecio: { type: Number, required: true },
});

const schemaTarifaImpuestoAplicado = new mongoose.Schema({
    tarifaActual: { type: Number, required: true },
    nuevoTarifa: { type: Number, required: true },
});

const schemaTarifaDescuentoLibroFan = new mongoose.Schema({
    descuentoActual: { type: Number, required: true },
    nuevoDescuento: { type: Number, required: true },
});


//Conversion del esquema al modelo
//Parametros recibidos: (Nombre del Modelo ,  Nombre del Esquema  , Coleccion de Datos en DB )
module.exports = mongoose.model('CantidadMinimaLibroFan', schemaCantidadMinimaLibroFan, 'parametros');
module.exports = mongoose.model('PrecioActualPorEnvio', schemaPrecioActualPorEnvio, 'parametros');
module.exports = mongoose.model('TarifaImpuestoAplicado', schemaTarifaImpuestoAplicado, 'parametros');
module.exports = mongoose.model('TarifaDescuentoLibroFan', schemaTarifaDescuentoLibroFan, 'parametros');