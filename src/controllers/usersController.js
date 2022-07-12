
const { validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")
const db = require("../database/models")
const fetch = require('node-fetch')


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
                    rol: user.rol_id
                };
        /*      if(req.body.remember){
                const TIME_IN_MILISECONDS = 60000 * 60 * 24 * 365;
                res.cookie('formarCookie', req.session.user, {
                    expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                    httpOnly: true,
                    secure: true
                });
            }; */
            res.locals.user = req.session.user;
    
            res.redirect('/');
            
        })
        .catch(error => res.send(error))
    

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
                session: req.session,
                old: req.body
            })
        }
    
    },
    profile: (req, res) => {
        fetch("https://apis.datos.gob.ar/georef/api/provincias")
        .then((res)=> res.json())
        .then((data)=>{
            db.User.findOne({
                where: {
                    id: req.session.user.id
                },
                include: [{ association: "addresses" }],
            })
            .then((user) => {
                res.render("userProfile", {
                    session: req.session,
                    user,
                    titulo: req.session.user.name,
                    provincias: data.provincias,
                })
            })
        })
        
    },
    profileUpdate: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.User.update({
                email: req.body.email,
                name: req.body.name,
                phone: req.body.phone,
            },{
                where: {
                    id: req.session.user.id
                }
            })
            .then(() => 
                res.redirect("/usuarios/perfil")
            )
            .catch(error => res.send(error))
        }else{
            fetch("https://apis.datos.gob.ar/georef/api/provincias")
            .then((res)=> res.json())
            .then((data)=>{
                db.User.findOne({
                    where: {
                        id: req.session.user.id
                    },
                    include: [{ association: "addresses" }],
                })
                .then((user) => {
                    res.render("userProfile", {
                        session: req.session,
                        user,
                        titulo: req.session.user.name,
                        provincias: data.provincias,
                    })
                })
            })
        }
    },
    avatarUpdate: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.User.update({
                avatar: req.file ? req.file.filename : "default-image.png"
            },{
                where: {
                    id: req.session.user.id
                }
            })
            .then(() => 
                res.redirect("/usuarios/perfil")
            )
            .catch(error => res.send(error))
        }else{
            db.User.findOne({
                where: {
                    id: req.session.user.id
                },
                include: [{ association: "addresses" }],
            })
            .then((user) => {
                res.render("userProfile", {
                    session: req.session,
                    user,
                    titulo: req.session.user.name,
                    errors: errors.mapped()
                })
            })
        }
    },


    addressCreate: (req, res) => {
        db.Address.create({
            ...req.body,
            user_id: req.session.user.id,
        })
        .then(() => res.redirect("/usuarios/perfil"))
        .catch((error) => res.send(error))
    },
    addressDestroy: (req, res) => {
        db.Address.destroy({
            where: {
                id: req.params.id,
            }
        })
        .then(() => {
            res.redirect("/usuarios/perfil")    
        })
        .catch((error) => res.send(error))
    },
    logout: (req, res) => {
        req.session.destroy();

        if(req.cookies.formarCookie){
            res.cookie('Rosé', "", { maxAge: -1 })
        }

        res.redirect('/')
    }
}
