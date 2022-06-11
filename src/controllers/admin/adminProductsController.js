const db = require('../../database/models');
const Product = require('../../database/models/Product');

module.exports = {
    /* Envia la vista del listado de productos */
    list: (req, res) => {
        db.Product.findAll({
            include: [
                {association: "category"},
                {association: "productImage"}
            ]
        })
        .then((productos) =>{
            res.render('admin/pages/productos/listado', {
                titulo: "Listado de productos",
                productos,
                session: req.session
        })
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
        db.Product.create({
            include: [
                {association: "category"},
                {association: "productImage"}
            ],
            name: req.body.name,
            category_id: req.body.categoryId,
            price: req.body.price,
            stock: req.body.stock,
            discount: req.body.discount,
            description: req.body.description,
            image: req.body.imageName,
            session: req.session
          })
            .then((result) => {
              res.redirect("/admin/productos");
            })
            .catch((error) => res.send(error));
    },
    /* Envia la vista del form de edicion de prod */
    productEdit: (req, res) => {
        let idProducto = +req.params.id;

        db.Product.findByPk(idProducto)
          .then((producto) => {
            res.render("admin/pages/productos/editarProducto", {
              titulo: "Editar producto",
              producto,
              session: req.session
            });
          })
          .catch((error) => res.send(error));
      },
    productUpdate: (req, res) => {
        let idProducto = +req.params.id;
        db.Product.update(
            {
              name: req.body.name,
              price: req.body.price,
              discount: req.body.discount,
              category_id: req.body.categoryId,
              stock: req.body.stock ? true : false,
              description: req.body.description
            },
            {
              where: {
                id: idProducto,
              },
            }
          )
            .then((result) => {
              if (result) {
                res.redirect("/admin/productos");
              } else {
                res.send("Ups ocurrio un error");
              }
            })
            .catch((error) => res.send(error));
        },
    
    productDelete: (req, res) => {     
        let idProducto = +req.params.id;
        db.Product.destroy({
            where: {
              id: idProducto,
            },
          })
            .then((result) => {
              if (result) {
                res.redirect("/admin/productos");
              } else {
                res.send("Ups algo rompí");
              }
            })
            .catch((error) => res.send(error));
    },
    productSearch: (req, res) => {

    },
}
