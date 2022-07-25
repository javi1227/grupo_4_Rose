
const {getProducts} = require('../data');
const db = require('../database/models');
const {search, contacto } = require('../routes/indexRouter');
const { Op } = require('Sequelize');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const removeAccents = (str) => {return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/* Este archivo tiene la ejecución que se hace cuando se entra en home */
module.exports = {
    /* envia la vista */
    getProducts: (req, res) => {
        db.Product.findAll({
            include: [
                {association:"category"},
                {association:"productImage"} 
            ]
        })
        .then((productos)=>{
            res.render('index', {
                titulo: "Rosé",
                productos,
                toThousand,
                session: req.session
            })  
        })
        .catch((error) => res.send(error))  
    
    },
    index: (req, res) =>{
        db.Product.findAll({
            include: [
                {association:"product"},
                {association:"discount"} 
            ],
            where: {
                [Op.or]: [
                    {discount: {[Op.substring]:resultado}},
                ]
            },
        })
        .then(products => {
            res.render('index', {
                titulo: "Rosé",
                titulo_producto: "Productos",
                productos: products,
                session: req.session,
                toThousand,
                })

            })
    },
    contacto:(req, res) => {
        res.render('contacto', {
            titulo: "contacto",
            session: req.session,
    })
    
},


search: (req, res) => {
    let resultado = req.query.search.toLowerCase()
    db.Product.findAll({
        include: [
            {association:"category"},
            {association:"productImage"} 
        ],
        where: {
            [Op.or]: [
                {name: {[Op.substring]:resultado}},
            ]
        },
    })
    .then(resultadoBusqueda => {
        res.render('results',{
            title: "Busqueda",
            resultadoBusqueda,
            search: req.query.search,
            toThousand,
            session: req.session
        })
    })
    .catch(errors => console.log(errors))    
}

}
