
const {getProducts} = require('../data')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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
            session: req.session,
            toThousand,
        })
    },
    contact: (req, res) => res.send("Contacto")
}
