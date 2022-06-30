const { check } = require('express-validator');

let addProductsValidator = [
    check("name")
        .notEmpty().withMessage('Ingrese un nombre').bail()
        .isLength({min: 4}).withMessage('Ingrese 4 caracteres o más'),
    check("price")
        .notEmpty().withMessage('Campo requerido').bail()
        .isLength({min : 2}).withMessage('Ingresé 2 digitos o más'),
    check("categoryId")
        .notEmpty().withMessage('Seleccione una categoria').bail(),
    check("description").withMessage('Escriba una descripción del producto').bail()
    .isLength({min: 10}).withMessage('Escriba una descripción más larga')
]