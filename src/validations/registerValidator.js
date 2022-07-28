const { check, body }= require('express-validator');
/* const users = require('../data/users'); */
const db = require("../database/models")

let validateRegister = [
    check('name')
        .notEmpty().withMessage('Ingrese su usuario').bail()
        .isLength({min:2, max:20}).withMessage('Ingrese un usuario válido'),
    check('email')
        .notEmpty().withMessage('El email es requerido').bail()
        .isEmail().withMessage('Ingrese un email válido'),
    body("email").custom((value)=>{
        return db.User.findOne({
            where: {
                email: value,
            }
        })
        .then((user) => {
            if(user){
                return Promise.reject("Email ya registrado")
            }
        })
       
       
    }).withMessage("Email ya registrado"),
    check('password')
        .notEmpty().withMessage('Ingrese una contraseña').bail()
        .isLength({min: 7 }).withMessage('La contraseña debe tener por lo menos 7 caracteres'),
    check('password2')
        .notEmpty().withMessage('Reingrese su contraseña'),
        body('password2').custom((value, { req }) => {
                if(value !== req.body.password){
                    return false;
                }
                return true;
        }).withMessage('Las contraseñas no coinciden'),
    check("terms")
        .isString("on").withMessage("Debes aceptar los términos y condiciones")
];

module.exports = validateRegister;
