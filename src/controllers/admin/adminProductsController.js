const { getProducts, writeProducts } = require('../../data');

module.exports = {
    /* Envia la vista del listado de productos */
    list: (req, res) => {
        res.render('admin/pages/productos/listado', {
            titulo: "Listado de productos",
            productos: getProducts,
            session: req.session
        })
    },
    /* Envia vista de form de creacion de producto */
    productAdd: (req, res) => {
        res.render('admin/pages/productos/agregarProducto', {
            titulo: "Agregar producto",
            session: req.session
        })
    },
    /* recibe datos de form de creacion y guarda */
    productCreate: (req, res) => {
        let lastId = 0;
        getProducts.forEach(product => {
            if(product.id > lastId){
                lastId = product.id;
            }
        });

        let newProduct = {
            ...req.body, 
            id: lastId + 1,
            image: "",
            stock: req.body.stock ? true : false
        }
        
        getProducts.push(newProduct)

       writeProducts(getProducts)

       res.redirect('/admin/productos')
    },
    /* Envia la vista del form de edicion de prod */
    productEdit: (req, res) => {
        let idProducto = +req.params.id;
        let producto = getProducts.find(producto => producto.id === idProducto)
        res.render('admin/pages/productos/editarProducto', {
            titulo: "Edición",
            producto,
            session: req.session
        })
    },

    productUpdate: (req, res) => {
        let idProducto = +req.params.id;
        getProducts.forEach(producto => {
            if(producto.id === idProducto){
                producto.name = req.body.name
                producto.price = req.body.price
                producto.discount = req.body.discount
                producto.categoryId = req.body.categoryId
                producto.projectId = req.body.projectId
                producto.stock = req.body.stock ? true : false
                producto.description = req.body.description
            }
        })

        writeProducts(getProducts);

        res.redirect('/admin/productos');
    },
    
    productDelete: (req, res) => {     
        let idProducto = +req.params.id;
        getProducts.forEach(producto => {
            if(producto.id === idProducto){           
                let productToDeleteIndex = getProducts.indexOf(producto);              
                getProducts.splice(productToDeleteIndex, 1)
            }
        })
        writeProducts(getProducts);
        res.redirect('/admin/productos')
    },
    productSearch: (req, res) => {

    },
}
