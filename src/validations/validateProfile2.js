const { check } = require('express-validator');


let validateProfile2 = [
    
    check("street")
    .notEmpty().withMessage("Ingrese la direccion"),
    check("number")
        .notEmpty().withMessage("Ingrese altura de calle"),
    check("province")
        .notEmpty().withMessage("Ingrese la provincia"),
    check("city")
        .notEmpty().withMessage("Ingrese la localidad"),
];

module.exports = validateProfile2;