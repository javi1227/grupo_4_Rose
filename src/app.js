const express = require('express');
const app = express();
const path = require('path');
const process = require('process');
const PORT = process.env.PORT || 3050;


// Views Config
app.set('view engine', 'ejs');
app.set('views', 'src/views');

/* Enrutadores */
const indexRouter = require('./routes/indexRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
const adminRouter = require('./routes/adminRouter');


app.use(express.static(path.join(__dirname,'../public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//MiddleWares Rutas : gestion de peticiones al "/"
app.use('/', indexRouter); // HOME - Contact 
app.use('/productos', productsRouter); // Listado, detalle
app.use('/usuarios', usersRouter); //Login, registro, perfil
app.use('/admin', adminRouter);  // Admin, ABM Productos, ABM Projectos



app.listen(PORT, () => console.log(`
Server listen port ${PORT}
http://localhost:${PORT}
`));