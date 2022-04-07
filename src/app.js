const express= require('express');
const app= express();
const path= require('path');
const PORT= 3050;
app.use(express.static(path.join(__dirname,'../public')));


//Enrutadores 1 //

const adminRouter = require("./routes/adminRouter");
const productsRouter = require('./routes/productsRouter');

app.use("/admin", adminRouter); //ABM productos , ABM projectos 
app.use('/productos', productsRouter); // Listado, detalle

  
//             //  

// Views Config

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

// 

app.get('/', (req, res) => {
    res.render ('index')
});

app.get('/home', (req, res) => {
    res.render ('index')
});

app.get('/carro-de-compra', (req, res) => {
    res.render ('carro-de-compra')
});

app.get('/login', (req, res) => {
    res.render ('login')    
});

app.get('/register', (req, res) => {
    res.render ('register')    
});

app.get('/detalle-de-producto', (req, res) => {
    res.render ('detalle-de-producto')
});

// app.get('/404', (req, res) => {
//     res.sendFile(path.join(__dirname,'/views/404.html'))
// });







app.listen(PORT)
