const db = require('../database/models');
let {getCarro, getProducts} = require('../data/index')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    getAll: (req, res) => {
        db.Product.findAll({
            include: [
                  {association:"category"} 
             ]
        })
        .then(products => {
            res.send(products)
        })
        
           /*  include: [
              {association:"productImages"}, 
                {association:"category"} 
           ]  */
            

       /*  )
        .then((productos)=>{
           res.send(productos)
            res.render('productos', {
                titulo: "Productos",
                productos,
                toThousand,
                session: req.session
                
            })  
        })
          .catch((error) => console.log(error))  */
    
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
