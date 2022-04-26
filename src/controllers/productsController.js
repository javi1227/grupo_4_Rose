const { getCarro, getCategories, getProducts } = require('../data');


module.exports = {
    getAll: (req, res) => {
        res.render('productos', {
            titulo: "Rosé",
            detail: getProducts
    })
    },
    getOne: (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
        
        let idProducto = +req.params.id; 
        
        let product = getProducts.find((product) => product.id === idProducto) 
        
        if(product){
            res.write("Detalle de producto\n") 
            res.write(`Nombre: ${product.name}\n`)
            res.write(`Precio: ${product.price}\n`)
            res.write(`Descripción: ${product.description}\n`)
            res.write(`Descuento: ${product.discount}\n`)
        } else {
            res.write("Producto no existe")
        }
        res.end()
    },
    
/* Este archivo tiene la ejecución que se hace cuando se entra en home */
    /* envia la vista */
    Carro: (req, res) =>{
        /* reenderiza la vista ejs */
        res.render('carro-de-compra', {
            titulo: "Rosé",
            detail: getCarro
    })
    
}
};
