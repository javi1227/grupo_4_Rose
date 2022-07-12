const express = require('express');
const router = express.Router();
const adminCategoriesController = require('../controllers/admin/adminCategoriesController');
const adminController = require('../controllers/admin/adminController');
const adminProductsController = require('../controllers/admin/adminProductsController');
const adminUsersController = require('../controllers/admin/adminUsersController');
const userSessionCheck = require('../middlewares/userSessionCheck');
const adminCheck = require('../middlewares/adminCheck');
const uploadFile = require('../middlewares/uploadAvatar');
const productsValidator = require('../validations/productsValidator');
const uploadProduct = require('../middlewares/uploadProductos')




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
router.post('/productos', uploadProduct.array('imagen'), productsValidator, adminProductsController.productCreate);
/* GET - Editar producto */
router.get('/productos/editar/:id', userSessionCheck, adminCheck, adminProductsController.productEdit);
/* PUT - Actualiza producto en la DB */
router.put('/productos/:id', adminProductsController.productUpdate);
/* DELETE - Elimina un producto */
router.delete('/productos/eliminar/:id', adminProductsController.productDelete);




router.get('/categorias',userSessionCheck, adminCheck, adminCategoriesController.list);
/* GET - Agregar emprendimiento */
router.get('/categorias/agregar',userSessionCheck, adminCheck, adminCategoriesController.categoryAdd);
/* POST - Crea un emprendimiento en la DB */
router.post('/categorias', adminCategoriesController.categoryCreate);
/* GET - Editar emprendimiento */
router.get('/categorias/editar/:id',userSessionCheck, adminCheck, adminCategoriesController.categoryEdit);
/* PUT - Actualiza emprendimiento en la DB */
router.put('/categorias/:id', adminCategoriesController.categoryUpdate);
/* DELETE - Elimina un emprendimiento */
router.delete('/categorias/eliminar/:id', adminCategoriesController.categoryDelete);
module.exports = router;


/* ============== */
/* CRUD PRODUCTOS */
/* ============== */
/* GET - Lista de productos */
router.get('/usuarios', userSessionCheck,adminUsersController.list);
/* GET - Agregar producto */
router.get('/usuarios/agregar', userSessionCheck,adminUsersController.usersAdd);
/* POST - Crea un usero en la DB */
router.post('/usuarios', uploadFile.any(''), adminUsersController.usersCreate);
/* GET - Editar usero */
router.get('/usuarios/editar/:id', userSessionCheck,  adminUsersController.usersEdit);
/* PUT - Actualiza usero en la DB */
router.put('/usuarios/:id', adminUsersController.usersUpdate);
/* DELETE - Elimina un usero */
router.delete('/usuarios/eliminar/:id', adminUsersController.usersDelete);
