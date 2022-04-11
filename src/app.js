const express = require('express');
const app = express();
const path = require('path');
const process = require('process');
const PORT = process.env.PORT || 3050;
const methodOverride = require('method-override');


// Views Config
app.set('view engine', 'ejs');
app.set('views', 'src/views');

/* Enrutadores */
const indexRouter = require('./routes/indexRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
const adminRouter = require('./routes/adminRouter');
const carroRouter = require('./routes/carroRouter');


app.use(express.static(path.join(__dirname,'../public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));

//MiddleWares Rutas : gestion de peticiones al "/"
app.use('/', indexRouter); // HOME - Contact 
app.use('/productos', productsRouter); // Listado, detalle
app.use('/usuarios', usersRouter); //Login, registro, perfil
app.use('/admin', adminRouter);  // Admin, ABM Productos, ABM Projectos
app.use('/carro-de-compra', carroRouter); // Carrito de compra */
app.use((req, res, next) => {
    res.status(404).render("not-found") //Error 404
})



app.listen(PORT, () => console.log(`
Server listen port ${PORT}
http://localhost:${PORT}
`));
