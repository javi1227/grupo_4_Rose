const { check, body }= require('express-validator');
const {users} = require('../data');

let validateLogin = [
    check('name')
        .notEmpty().withMessage('El email es requerido').bail()
        .isLength({min:4}).withMessage('Ingrese un nombre valido'),
    body('name').custom((value, { req })=>{
        let user = users.find(user => user.email === value);
        if(user.password === req.body.password){
          return true;
        }
          return false;
    }).withMessage('Email o contraseña incorrecta'),
    check('password')
        .notEmpty().withMessage('Ingrese una contraseña')
];

module.exports = validateLogin;
