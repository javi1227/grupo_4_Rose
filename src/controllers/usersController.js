const {getUsers, writeUsers} = require('../data');
const { validationResult } = require('express-validator');

module.exports = {
    login: (req, res) => {
        res.render('login', {
            titulo: "Iniciar sesión",
            // session: req.session
        })
    },

    processLogin: (req, res) =>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
        // levantar sesión
        // let user= getUsers.find(user => user.email === req.body.email);

        // req.session.user = {
        //     id: user.id,
        //     name: user.name,
        //     avatar:user.avatar,
        //     email: user.email,
        //     rol: user.rol
        // }

        // res.locals.user = req.session.user
        // fin levantar sesión
        console.log("asasasasa");
        res.redirect('/');
        }else{
        res.render('login', {
            titulo: "Iniciar sesión",
            errors: errors.mapped(),
            // session: req.session
        })
        }
    },
    register: (req,res) => {
        res.render('register', {
            titulo: "Register",
            session: req.session
        })
    },

    
    processRegister: (req, res) =>{
        // verificar si hubo errores en el form
        let errors = validationResult(req);
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
                        avatar: req.file ? req.file.filename : "default-image.png",
                        rol: "USER"
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
                errors: errors.mapped(),
                session: req.session
            })
        }
    
    }
}
