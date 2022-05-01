'use strict';

const express = require('express'); //Importamos la libreria Express para tener acceso a protocolos http
const router = express.Router(); //Define los endpoints para el manejo de datos
const autor = require('../models/autores.model') //Importamos el modelo del autor

//Endpoints
router.post('/registrar-autor', (request, response) => {
    //Obtenemos los datos del autor que vienen en el request 
    let nuevoAutor = new autor({
        nombreAutor: request.body.nombreAutor,
        nacimiento: request.body.nacimiento,
        defuncion: request.body.defuncion,
        nacionalidad: request.body.nacionalidad,
        bibliografia: request.body.bibliografia,
        libros: request.body.libros,
        annoNobel: request.body.annoNobel,
        estado: 1,

    });

    //Guardamos el autor
    nuevoAutor.save((error) => {
        if (error) {
            response.json({
                mensaje: 'Error al registrar autor',
                error
            })
        } else {
            response.json({
                mensaje: 'Registro Exitoso',
            })
        }
    });
}); //Ruta para registrar un autor

router.get('/obtener-autores', (request, response) => {
    autor.find((error, lista) => {
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
}); //Ruta para obtener todos los autores

router.get('/obtener-autor', (request, response) => {}); //Ruta para obtener un solo autor

router.put('/actualizar-autor', (request, response) => {}); //Ruta para actualizar autor

router.delete('/eliminar-autor', (request, response) => {}); //Ruta para eliminar autor


//Middleware
module.exports = router;