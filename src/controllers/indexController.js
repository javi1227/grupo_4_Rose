
const {getProducts} = require('../data')

/* Este archivo tiene la ejecución que se hace cuando se entra en home */
module.exports = {
    /* envia la vista */
    index: (req, res) =>{
        let productsInSale = getProducts.filter(product => product.discount > 0);

        /* reenderiza la vista ejs */
        res.render('index', {
            titulo: "Rosé",
            titulo_producto: "Productos",
            productos: getProducts,
            productsInSale,
            session: req.session
        })
    },
    contact: (req, res) => res.send("Contacto")
}
