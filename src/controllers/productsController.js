const { getCarro, getCategories, getProducts } = require('../data');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {


    getAll: (req, res) => {
        res.render('productos', {
            titulo: "Rosé",
            detail: getProducts,
            toThousand,
            session: req.session
    })
    },
    getOne: (req, res) => {
        let product = getProducts.find(product => product.id === +req.params.id)

        res.render('detalle-de-producto', {
           detail: getProducts,
           product,
           toThousand,
           session: req.session

       })
    },
/* Este archivo tiene la ejecución que se hace cuando se entra en home */
    /* envia la vista */
    Carro: (req, res) =>{
        /* reenderiza la vista ejs */
        res.render('carro-de-compra', {
            titulo: "Rosé",
            detail: getCarro,
            session: req.session
    })
    
}

};
