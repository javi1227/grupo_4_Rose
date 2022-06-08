
const { validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")
const db = require("../database/models")

module.exports = {
    login: (req, res) => {
        res.render('login', {
            titulo: "Iniciar sesión",
            session: req.session
        })
    },
    processLogin: (req, res) =>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
        // levantar sesión
            db.User.findOne({
                where:{
                    email: req.body.email
                }
            })
            .then(user => {
                req.session.user ={
                    id: user.id,
                    name: user.name,
                    avatar:user.avatar,
                    email: user.email,
                    rol: user.rol
                };
                if(req.body.remember){
                const TIME_IN_MILISECONDS = 60000 * 60 * 24 * 365;
                res.cookie('formarCookie', req.session.user, {
                    expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                    httpOnly: true,
                    secure: true
                });
            };
            res.locals.user = req.session.user;
    
            res.redirect('/');
            
        })
        .catch(error => console.log('Error USER LOGIN'))
    

        }else{
        res.render('login', {
            titulo: "Iniciar sesión",
            errors: errors.mapped(),
            session: req.session
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
            db.User.create({
                name: req.body.name,
                email: req.body.email,
                rol_id: 4,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar: req.file ? req.file.filename : "default-image.png"
            })
            .then((user) => {
                res.redirect("/usuarios/login")
            })
            .catch(error => res.send(error))
            
        } else{
            // codigo para mostrar errores
            res.render('register', {
                titulo: "Register",
                errors: errors.mapped(),
                session: req.session
            })
        }
    
    },
    logout: (req, res) => {
        req.session.destroy();

        if(req.cookies.formarCookie){
            res.cookie('formarCookie', "", { maxAge: -1 })
        }

        res.redirect('/')
    }
}
