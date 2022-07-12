const { check } = require('express-validator');


let validateProfile = [
    check("name")
        .notEmpty().withMessage("El nombre es requerido"),
    check("phone")
    .notEmpty().isNumeric().withMessage("Ingrese un número telefonico valido"),
];

module.exports = validateProfile;
