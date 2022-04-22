const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const registerValidator = require ('../validations/registerValidator');

/* GET - ruta login -  reenderiza vista login */
router.get('/login', usersController.login);
/* GET - ruta register - Reenderiza vista registro*/
router.get('/registro', usersController.register);
/* POST - Crea un nuevo usuario y se le aplica el register validator en medio*/
router.post('/registro', registerValidator ,usersController.processRegister)



module.exports = router;
