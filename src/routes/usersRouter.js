const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const uploadFile = require('../middlewares/uploadAvatar')
const registerValidator = require ('../validations/registerValidator');
const loginValidator = require ('../validations/loginValidator');
const userInSessionCheck = require ('../middlewares/userInSessionCheck');

/* GET - ruta login -  reenderiza vista login */
router.get('/login', userInSessionCheck,usersController.login);
/* POST - Loguea al usuario */
router.post('/login', loginValidator , usersController.processLogin);
/* GET - ruta register - Reenderiza vista registro*/
router.get('/registro', userInSessionCheck, usersController.register);
/* POST - Crea un nuevo usuario y se le aplica el register validator en medio*/
router.post('/registro', uploadFile.single('avatar') ,registerValidator ,usersController.processRegister)
/*GET -Logout*/
router.get('/logout', usersController.logout);

module.exports = router;
