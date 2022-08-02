const { check } = require('express-validator');


let validateProfile2 = [
    
    check("street")
    .notEmpty().withMessage(""),
    check("number")
        .notEmpty().withMessage(""),
    check("province")
        .notEmpty().withMessage(""),
    check("city")
        .notEmpty().withMessage(""),
];

module.exports = validateProfile2;
