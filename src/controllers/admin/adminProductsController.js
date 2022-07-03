const db = require('../../database/models');
const { validationResult } = require('express-validator');
const { promiseImpl } = require('ejs');

let categoriesPromise = db.Category.findAll();
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
      Promise.all([categoriesPromise])
      .then(([categories]) =>{
        res.render('admin/pages/productos/agregarProducto', {
            titulo: "Agregar producto",
            session: req.session,
            categories
        })
      })
    },
    /* recibe datos de form de creacion y guarda */
    productCreate: (req, res) => {
      let errors = validationResult(req);
      if(errors.isEmpty()){
          /* 1 - Crear el objeto producto */
          db.Product.create({
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            category_id: req.body.category,
            description: req.body.description,
            stock: req.body.stock ? 1 : 0
          })
          .then((product) => {
              let arrayImages = req.files.map(image => {
                  return {
                    imageName: image.filename,
                    product_id: product.id
                  } 
                 })
     
                 db.ProductImage.bulkCreate(arrayImages)
                 .then(() => res.redirect('/admin/productos'))
                 .catch(error => console.log(error))
          })
      }else{
          let productosPromise = db.Product.findAll();
  
          Promise.all([productosPromise, categoriesPromise])
          .then(([productos, categories]) => {
            res.render("admin/pages/productos/agregarProducto", {
              titulo: "Agregar producto",
              productos,
              categories,
              errors:errors.mapped(),
              old: req.body,
              session: req.session
              })
          } )
      }
  },
    /* Envia la vista del form de edicion de prod */
    productEdit: (req, res) => {
        let idProducto = +req.params.id;
        let productPromise = db.Product.findByPk(idProducto)
        
        Promise.all([productPromise, categoriesPromise])
          .then(([producto, categories]) => {
            res.render("admin/pages/productos/editarProducto", {
              titulo: "Editar producto",
              producto,
              categories,
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
              category_id: req.body.category,
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
