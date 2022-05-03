'use strict';

const express = require('express'); //Importamos la libreria Express para tener acceso a protocolos http
const router = express.Router(); //Define los endpoints para el manejo de datos
const Usuario = require('../models/usuarios.model') //Importamos el modelo del usuario

//Endpoints
router.post('/registrar-usuario', (request, response) => {
    //Obtenemos los datos del usuario que vienen en el request 
    let nuevoUsuario = new Usuario({
        primerNombre: request.body.primerNombre,
        segundoNombre: request.body.segundoNombre,
        primerApellido: request.body.primerApellido,
        segundoApellido: request.body.segundoApellido,
        tipoIdentificacion: request.body.tipoIdentificacion,
        identificacion: request.body.identificacion,
        foto: request.body.foto,
        provincia: request.body.provincia,
        canton: request.body.canton,
        distrito: request.body.distrito,
        direccion: request.body.direccion,
        genero: request.body.genero,
        correo: request.body.correo,
        password: request.body.password,
        autoresFavs: request.body.autoresFavs,
        generosFavs: request.body.generosFavs,
        rol: 2,
        estado: 1,
        libroFan: 0
    });

    //Guardamos el usuario
    nuevoUsuario.save((error) => {
        if (error) {
            response.json({
                mensaje: 'Error al registrar usuario',
                error
            })
        } else {
            response.json({
                mensaje: 'Registro Exitoso',
            })
        }
    });
}); //Ruta para registrar un usuario

router.get('/obtener-usuarios', (request, response) => {

    Usuario.find((error, lista) => {
        if (error) {
            response.json({
                msj: 'no se pudo consultar el listado de usuarios',
                error

            });
        } else {
            response.json({
                msj: 'usuarios listados correctamente',
                lista
            });

        }

    });
});
//Ruta para obtener todos los usuario


router.get('/obtener-usuario', (request, response) => {}); //Ruta para obtener un solo usuario

router.put('/actualizar-usuario', (request, response) => {}); //Ruta para actualizar usuario

router.delete('/eliminar-usuario', (request, response) => {}); //Ruta para eliminar usuario


//Middleware
module.exports = router;