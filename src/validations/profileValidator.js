const { check } = require('express-validator');


let validateProfile = [
    check("name")
        .notEmpty().withMessage("El nombre es requerido"),
    check("phone")
        .notEmpty().withMessage("Ingrese un teléfono"),
    check("email")
    .notEmpty().withMessage("Ingrese un Email valido"),
    check("street")
    .notEmpty().withMessage("Es necesario que ingrese una calle"),
    check("number")
    .notEmpty().withMessage("Es necesario que ingreses un número de calle"),
    check("email")
    .notEmpty().withMessage("Ingrese un Email valido"),

];

module.exports = validateProfile;
