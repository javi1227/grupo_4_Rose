const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin/adminController');
const adminProductsController = require('../controllers/admin/adminProductsController');
const multer = require('multer');
const path = require('path');
const userSessionCheck = require('../middlewares/userSessionCheck');
const adminCheck = require('../middlewares/adminCheck');

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, '../public/images/avatars')
    },
    filename: (req, file, cb) => {
        let = fileName = `${Date.now()}_img${path.extname(file.filename)}}`
        cb(null, fileName);
    }
});

const uploadFile = multer({ storage });

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
