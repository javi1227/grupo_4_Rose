const { check, body } = require('express-validator');
const bcrypt = require("bcryptjs");
const db= require("../database/models")


let validateLogin = [
    check("email")
        .notEmpty().withMessage("").bail()
        .isEmail().withMessage(""),
        body("email").custom((value, { req })=>{
            return db.User.findOne({
                where: {
                    email: req.body.email,
                }
            }).then((user) => {
                if(!bcrypt.compareSync(req.body.password, user.password)){
                    return Promise.reject()
                }
            })
            .catch((error) => {
                return Promise.reject("")
            })
        }),
    check("password")
        .notEmpty().withMessage(""),
];

module.exports = validateLogin;
