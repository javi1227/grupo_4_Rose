
const {getProducts} = require('../data');
const db = require('../database/models');
const { search } = require('../routes/indexRouter');
const { contacto } = require('../routes/indexRouter');



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
            // let productsInSale = productos.filter( product => product.discount > 0 );
            // let specialProducts = [productos.find( product => product.category_id === 14 )]
            // console.log(productos, "estamos aca");
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
        let productsInSale = getProducts.filter(product => product.discount > 0);
        let specialProducts = getProducts.filter(product => product.projectId === 1);

        /* reenderiza la vista ejs */
        res.render('index', {
            titulo: "Rosé",
            titulo_producto: "Productos",
            productos: getProducts,
            productsInSale,
            specialProducts,
            session: req.session,
            toThousand,
        })
    },
    contacto:(req, res) => {
        res.render('contacto', {
            titulo: "contacto",
            session: req.session,
    })
    
},


    
    search: (req, res) => {
		let searchResult = []
		getProducts.forEach(product => {
			if(removeAccents(product.name.toLowerCase()).includes(req.query.keywords.toLowerCase())){
				searchResult.push(product)
			}
		});        
		res.render('results',{
			searchResult,
			keyword: req.query.keywords,
            session: req.session,
			toThousand,

		})		
	},

}
