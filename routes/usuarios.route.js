'use strict';

const express = require('express'); //Importamos la libreria Express para tener acceso a protocolos http
const router = express.Router(); //Define los endpoints para el manejo de datos
const Usuario = require ('../models/usuarios.model') //Importamos el modelo del usuario

//Endpoints
router.post('/registrar-usuario', (request, response) => {
    //Obtenemos los datos del usuario que vienen en el request 
    let nuevoUsuario = new Usuario ({
        primerNombre : request.body.primerNombre,
        segundoNombre : request.body.segundoNombre,
        primerApellido : request.body.primerApellido,
        segundoApellido : request.body.segundoApellido,
        tipoIndentificacion : request.body.tipoIndentificacion,
        indentificacion : request.body.indentificacion,
        provincia : request.body.provincia,
        canton : request.body.canton,
        distrito : request.body.distrito,
        genero : request.body.genero,
        rol : 2,
        correo : request.body.correo,
        password : request.body.password,
    });
    
    //Guardamos el usuario
    nuevoUsuario.save((error)=>{
        if (error) {
            response.json({
                mensaje : 'Error al registrar usuario', 
                error
            })
        } else {
            response.json({
                mensaje : 'Registro Exitoso', 
            })
        }
    });
}); //Ruta para registrar un usuario

router.get('/obtener-usuarios', (request, response) => {});  //Ruta para obtener todos los usuario

router.get('/obtener-usuario', (request, response) => {}); //Ruta para obtener un solo usuario

router.put('/actualizar-usuario', (request, response) => {}); //Ruta para actualizar usuario

router.delete('/eliminar-usuario', (request, response) => {}); //Ruta para eliminar usuario


//Middleware
module.exports = router;