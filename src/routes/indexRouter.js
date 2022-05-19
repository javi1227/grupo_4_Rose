const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

//llama al indexcontroller con la propiedad index (le da funcionalidad)
router.get('/', indexController.index);
router.get('/search', indexController.search)
router.get('/contacto', indexController.contact);
// router.get('/miPerfil', indexController.miPerfil);



module.exports = router;
