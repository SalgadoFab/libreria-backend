'use strict';

const express = require('express'); //Importamos la libreria Express para tener acceso a protocolos http
const router = express.Router(); //Define los endpoints para el manejo de datos
const Usuario = require('../models/usuarios.model') //Importamos el modelo del usuario

//Endpoints
router.post('/registrar-tipo-identificacion', (request, response) => {
    //Obtenemos los datos del usuario que vienen en el request 
    let nuevaIdentificacion = new Usuario({
        nombreIdentificacion: request.body.nombreIdentificacion,
        codigoIdentificacion: request.body.codigoIdentificacion,
        digitos: request.body.digitos,
    });

    //Guardamos el usuario
    nuevaIdentificacion.save((error) => {
        if (error) {
            response.json({
                mensaje: 'Error al registrar tipo de Identificacion',
                error
            })
        } else {
            response.json({
                mensaje: 'Registro Exitoso',
            })
        }
    });
}); //Ruta para registrar un tipo de identificacion

router.get('/obtener-tipo-identificacion', (request, response) => {}); //Ruta para obtener todos los tipo de identificacion

router.get('/obtener-tipo-identificacion', (request, response) => {}); //Ruta para obtener un solo tipo de identificacion

router.put('/actualizar-tipo-identificacion', (request, response) => {}); //Ruta para actualizar tipo de identificacion

router.delete('/eliminar-tipo-identificacion', (request, response) => {}); //Ruta para eliminar tipo de identificacion


//Middleware
module.exports = router;