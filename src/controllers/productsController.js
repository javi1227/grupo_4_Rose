const db = require('../database/models');
let {getCarro, getProducts} = require('../data/index')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    getAll: (req, res) => {
        db.Product.findAll({
            include: [
                {association:"category"},
                {association:"productImage"} 
            ],
        })
        .then((productos)=>{
            console.log(productos);
            res.render('productos', {
                titulo: "Productos",
                productos,
                toThousand,
                session: req.session
            })  
        })
        .catch((error) => res.send(error))  
    
    },
    getOne: (req, res) => {
        db.Product.findOne({
            where:{
                id: req.params.id
            },
            include: [
                {association:"category"},
                {association:"productImage"} 
            ]
        })
        .then((product)=>{
            res.render('detalle-de-producto', {
                titulo: "detalle",
                product,
                toThousand,
                session: req.session
            })  
        })
        .catch((error) => res.send(error))  
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
