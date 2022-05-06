const express = require('express');
const app = express();
const path = require('path');
const process = require('process');
const PORT = process.env.PORT || 3050;
const methodOverride = require('method-override');
const logMiddleware = require ('./middlewares/userLogs');
const session = require('express-session');
const cookieParser =  require('cookie-parser');
const cookieSession = require('./middlewares/cookieSession');



// Views Config
app.set('view engine', 'ejs');
app.set('views', 'src/views');

/* Enrutadores */
const indexRouter = require('./routes/indexRouter');
const productsRouter = require('./routes/productsRouter');
const adminRouter = require('./routes/adminRouter');
const usersRouter = require('./routes/usersRouter');
const productsDetailRouter = require('./routes/productDetailRouter');

// Middlewares de aplicación
app.use(express.static(path.join(__dirname,'../public')));
app.use(express.urlencoded({extended: false})); /* captura la info que se envia en el req */
app.use(express.json());
app.use(methodOverride('_method'));
app.use(logMiddleware);
/* session */
app.set('trust proxy', 1);
app.use(session({
    secret: 'Rosé ',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}))
app.use(cookieParser());
app.use(cookieSession);

//MiddleWares Rutas : gestion de peticiones al "/"
app.use('/', indexRouter); // HOME - Contact
app.use('/detalle-de-producto', productsDetailRouter); // detalle de producto
app.use('/productos', productsRouter); // Listado, detalle
app.use('/usuarios', usersRouter); //Login, registro, perfil
app.use('/admin', adminRouter);  // Admin, ABM Productos, ABM Projectos
app.use((req, res, next) => {
    res.status(404).render('not-found', {
        title: "404",
        session: req.session
    })
 //Error 404
});


app.listen(PORT, () => console.log(`
Server listen port ${PORT}
http://localhost:${PORT}
`));
