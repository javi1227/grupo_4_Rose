const { get } = require('express/lib/response');
const {getUsers, writeUsers} = require('../data');
const { validationResult } = require('express-validator');

module.exports = {
    login: (req, res) => {
        res.render('login', {
            titulo: "Iniciar sesión"
        })
    },
 
    processLogin: (req, res) => {
        let errors = validationResult(req);
        
        if(errors.isEmpty()){
        //levantar sesión
        res.redirect('/');
        }else{
        res.render('login', {
            titulo: "Iniciar sesión",
        errors: errors.mapped() 
        })
    }
    },
    register: (req,res) => {
        res.render('register', {
            titulo: "Register"
        })
    },

    
    processRegister: (req, res) =>{
        // verificar si hubo errores en el form
        let errors = validationResult(req);
        res.send(errors)
    
        // si no hay errores, crea el usuario
        if(errors.isEmpty()){
            // codigo para crear el usuario
               /* Registrar un usuario - Guardarlo en el JSON */
                /* 1- Crear un objeto usuario */
                    let lastId = 0;
                    getUsers.forEach(user => {
                        if(user.id > lastId){
                            lastId = user.id }
                        });

                    let newUser = {
                        id: lastId + 1,
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password,
                    }
                    /* 2- Guardar el nuevo usuario en el array de usuarios */
                    getUsers.push(newUser)
                    /* 3- Escribir el JSON de usuarios con el array actual */
                    writeUsers(getUsers)
                    /* 4- Devolver respuesta */
                    res.redirect('/usuarios/login')
        } else{
            // codigo para mostrar errores
            res.render('register', {
                titulo: "Register",
                errors: errors.mapped()
            })
        }
    
    }
}
