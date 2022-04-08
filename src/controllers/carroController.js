const { getCarro } = require('../data')

/* Este archivo tiene la ejecución que se hace cuando se entra en home */
module.exports = {
    /* envia la vista */
    Carro: (req, res) =>{
        /* reenderiza la vista ejs */
        res.render('carro-de-compra', {
            titulo: "Rosé",
            detail: getCarro
    })
}
}