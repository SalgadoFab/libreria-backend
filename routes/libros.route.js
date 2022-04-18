'use strict';

const express = require('express'); //Importamos la libreria Express para tener acceso a protocolos http
const router = express.Router(); //Define los endpoints para el manejo de datos
const Libro = require('../models/libros.model') //Importamos el modelo del libro

//Endpoints
router.post('/registrar-libro', (request, response) => {
    //Obtenemos los datos del libro que vienen en el request 
    let nuevoLibro = new Libro({
        nombreLibro: request.body.nombreLibro,
        isbn: request.body.isbn,
        nombreAutor: request.body.nombreAutor,
        formatoLibro: request.body.formatoLibro,
        idiomaLibro: request.body.idiomaLibro,
        fechaPublicacion: request.body.fechaPublicacion,
        generoLibro: request.body.generoLibro,
        premios: request.body.premios,
        precio: request.body.precio,
        libroStock: request.body.libroStock,
        rol: 2,
        estado: 1,
        libroStock: request.body.libroStock,
        descuento: request.body.descuento,
        resennaLibro: request.body.resennaLibro,
    });

    //Guardamos el libro
    nuevoLibro.save((error) => {
        if (error) {
            response.json({
                mensaje: 'Error al registrar libro',
                error
            })
        } else {
            response.json({
                mensaje: 'Registro Exitoso',
            })
        }
    });
}); //Ruta para registrar un libro

router.get('/obtener-libros', (request, response) => {}); //Ruta para obtener todos los usuario

router.get('/obtener-libro', (request, response) => {}); //Ruta para obtener un solo usuario

router.put('/actualizar-libro', (request, response) => {}); //Ruta para actualizar usuario

router.delete('/eliminar-libro', (request, response) => {}); //Ruta para eliminar usuario


//Middleware
module.exports = router;