
const {getProducts} = require('../data');
const { search } = require('../routes/indexRouter');


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const removeAccents = (str) => {return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/* Este archivo tiene la ejecución que se hace cuando se entra en home */
module.exports = {
    /* envia la vista */
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
    contact: (req, res) => res.send("Contacto"),


    
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
