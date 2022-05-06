const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin/adminController');
const adminProductsController = require('../controllers/admin/adminProductsController');
const userSessionCheck = require('../middlewares/userSessionCheck');
const adminCheck = require('../middlewares/adminCheck');
const uploadFile = require('../middlewares/uploadAvatar');



/* GET - Index */
router.get('/', userSessionCheck, adminCheck, adminController.index);



/* ============== */
/* CRUD PRODUCTOS */
/* ============== */
/* GET - Lista de productos */
router.get('/productos', userSessionCheck, adminCheck, adminProductsController.list);
/* GET - Agregar producto */
router.get('/productos/agregar', userSessionCheck, adminCheck, adminProductsController.productAdd);
/* POST - Crea un producto en la DB */
router.post('/productos', uploadFile.any(''), adminProductsController.productCreate);
/* GET - Editar producto */
router.get('/productos/editar/:id', userSessionCheck, adminCheck, adminProductsController.productEdit);
/* PUT - Actualiza producto en la DB */
router.put('/productos/:id', adminProductsController.productUpdate);
/* DELETE - Elimina un producto */
router.delete('/productos/eliminar/:id', adminProductsController.productDelete);

module.exports = router;
