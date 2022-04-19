'use strict';

//Importantamos la libreria de mongoose
const mongoose = require('mongoose');

//Creamos el esquema de los datos del parametro
const CantidadMinimaLibroFan = new mongoose.Schema({
    cantidadActual: { type: Number, required: true },
    nuevaCantidad: { type: Number, required: true },
});

const PrecioActualPorEnvio = new mongoose.Schema({
    precioActual: { type: Number, required: true },
    nuevoPrecio: { type: Number, required: true },
});

const TarifaImpuestoAplicado = new mongoose.Schema({
    tarifaActual: { type: Number, required: true },
    nuevoTarifa: { type: Number, required: true },
});

const TarifaDescuentoLibroFan = new mongoose.Schema({
    descuentoActual: { type: Number, required: true },
    nuevoDescuento: { type: Number, required: true },
});


//Conversion del esquema al modelo
//Parametros recibidos: (Nombre del Modelo ,  Nombre del Esquema  , Coleccion de Datos en DB )
module.exports = mongoose.model('Parametro', CantidadMinimaLibroFan, 'parametros');
module.exports = mongoose.model('Parametro', PrecioActualPorEnvio, 'parametros');
module.exports = mongoose.model('Parametro', TarifaImpuestoAplicado, 'parametros');
module.exports = mongoose.model('Parametro', TarifaDescuentoLibroFan, 'parametros');