
const {getProducts} = require('../data')

/* Este archivo tiene la ejecución que se hace cuando se entra en home */
module.exports = {
    /* envia la vista */
    detalle: (req, res) =>{
        /* reenderiza la vista ejs */
        res.render('detalle-de-producto')
    },

}
