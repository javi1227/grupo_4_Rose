const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

/* GET - ruta login -  reenderiza vista login */
router.get('/login', usersController.login);
/* GET - ruta register - Reenderiza vista registro*/
router.get('/registro', usersController.register);
/* POST - Crea un nuevo usuario */
router.post('/registro', usersController.processRegister)


module.exports = router;