const db = require('../database/models');
let {getCarro} = require('../data/index')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { Op } = require('Sequelize');

module.exports = {
    getAll: async (req, res) => {
        const productos = await db.Product.findAll({
            include: [
                {association:"category"},
                {association:"productImage"} 
            ],
        })
        .catch((error) => res.send(error))  
        const categories = await db.Category.findAll()
        .catch((error) => res.send(error))  
        res.render('productos', {
                    titulo: "Productos",
                    productos,
                    categories,
                    toThousand,
                    session: req.session
                })  
    },
    filter: (req, res) => {
        let busqueda = req.query.search
        db.Product.findAll({
            include: [
                {association:"category"},
                {association:"productImage"},
            ],
            where: {
            [Op.or]: [
                { category_Id: {[db.Sequelize.Op.substring]:busqueda}},
            ]
        },
        })
        .then(productos => {
            res.render('productos', {
                busqueda,
                title: 'filtro',
                session: req.session.search,
                productos,
                session: req.session
            })
        })
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
