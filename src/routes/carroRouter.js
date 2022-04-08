const express = require('express');
const router = express.Router();
const carroController = require('../controllers/carroController');

/* Ruta para listar productos */
router.get('/', carroController.Carro);


module.exports = router;