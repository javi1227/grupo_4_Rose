const express= require('express');
const app= express();
const path= require('path');
const PORT= 3050;
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'))
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'))
});

app.get('/carro-de-compra', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/carro-de-compra.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/login.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/register.html'))
});

app.get('/detalle-de-producto', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/detalle-de-producto.html'))
});

// app.get('/404', (req, res) => {
//     res.sendFile(path.join(__dirname,'/views/404.html'))
// });







app.listen(PORT)
