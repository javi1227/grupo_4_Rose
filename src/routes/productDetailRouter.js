const express = require('express');
const router = express.Router();
const detailController = require('../controllers/detailController');

//llama al productsDetailRouter con la propiedad index (le da funcionalidad)

router.get('/',detailController.detalle);


module.exports = router;
