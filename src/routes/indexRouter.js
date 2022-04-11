const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

//llama al indexcontroller con la propiedad index (le da funcionalidad)
router.get('/', indexController.index);
router.get('/contacto', indexController.contact);


module.exports = router;
