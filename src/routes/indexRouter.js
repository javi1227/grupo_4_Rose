const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

//llama al indexcontroller con la propiedad index (le da funcionalidad)
router.get('/',indexController.getProducts);
router.get('/contacto', indexController.contacto);
router.get('/search', indexController.search)



module.exports = router;
