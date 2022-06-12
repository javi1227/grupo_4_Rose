const { check } = require('express-validator');


let validateProfile = [
    check("email")
        .notEmpty().withMessage("Ingrese un Email"),
    check("name")
        .notEmpty().withMessage("El nombre es requerido"),
    check("phone")
        .notEmpty().withMessage("Ingrese un teléfono"),
];

module.exports = validateProfile;
