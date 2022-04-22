const { check, body }= require('express-validator');

let validateRegister = [
    check('name')
        .notEmpty().withMessage('El nombre es requerido').bail()
        .isLength({min:4}).withMessage('Ingrese un nombre valido'),
    check('email')
        .notEmpty().withMessage('El email es requerido').bail()
        .isEmail().withMessage('Ingrese un email valido'),
    check('password')
        .notEmpty().withMessage('Ingrese una contraseña')
        .isLength({min: 8}).withMessage('La contraseña debe tener por lo menos 8 caracteres'),
    check('password2')
        .notEmpty().withMessage('Reingrese su contraseña'),
        body('password2').custom((value, { req }) => {
                if(value !== req.body.password){
                    return false;
                }
                return true;
        }).withMessage('Las contraseñas no coinciden')
];

module.exports = validateRegister;
