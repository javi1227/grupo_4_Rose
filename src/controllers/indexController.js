
const {getProducts} = require('../data')

/* Este archivo tiene la ejecución que se hace cuando se entra en home */
module.exports = {
    /* envia la vista */
    index: (req, res) =>{
        /* reenderiza la vista ejs */
        res.render('index', {
            titulo: "Rosé",
            titulo_producto: "Novedades",
            descuento: "con descuentos",
            productos: getProducts
        })
    },
    contact: (req, res) => res.send("Contacto")
}