const { check, body } = require('express-validator');

let productsValidator = [
    check("name")
        .notEmpty().withMessage('Ingrese un nombre').bail()
        .isLength({min: 4}).withMessage('Ingrese 4 caracteres o más'),
    check("price")
        .notEmpty().withMessage('Campo requerido').bail()
        .isLength({min : 2}).withMessage('Ingresé 2 digitos o más'),
    check("categoryId")
        .notEmpty().withMessage('Seleccione una categoria').bail(),
    check("description")
    .notEmpty().withMessage('Escriba una descripción del producto').bail()
        .isLength({min: 2}).withMessage('Escriba una descripción más larga'),
    body("discount").custom(value =>{
        if(value >= 0 && value <= 100){
            return true;
        }
        return false
    }).withMessage("El descuento tiene que tener un valor entre 0 y 100")
]

module.exports = productsValidator