const db = require('../../database/models');
const { validationResult } = require('express-validator');
const fs = require("fs");
const path = require("path");

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
      db.Category.findAll()
      .then(categories =>{
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
            category_id: req.body.categoryId,
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
        let productPromise = db.Product.findByPk(idProducto);
        
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
      let errors = validationResult(req);

      if(errors.isEmpty()){
        db.Product.update({
              name: req.body.name,
              price: req.body.price,
              discount: req.body.discount,
              category_id: req.body.categoryId,
              stock: req.body.stock ? true : false,
              description: req.body.description
            },
            {
              where: {
                id: req.params.id,
              }
        })
        .then((result) => {
          /* res.send(result) */
          //1 - Preguntar si está subiendo imagenes
          console.log("1", req.file)
          if(req.file !== undefined){
            //2- Busco la imagen guardada
              db.ProductImage.findAll({
                where: {
                  product_id: req.params.id,
                }
              })
              .then((image) => {
                console.log("2", image)
                //Elimino la imagen del servidor
                if(fs.existsSync(path.join(__dirname, `../../../public/images/productos/${image}`))){
                  fs.unlinkSync(path.join(__dirname, `../../../public/images/productos/${image}`))
                }else{
                  console.log("-- No se encontró el archivo");
                }
                db.ProductImage.destroy({
                  where: {
                    product_id: req.params.id,
                  }
                })
                .then(() => {
                   db.ProductImage.create({
                    product_id: req.params.id,
                    imageName: req.file.filename
                   })
                   .then((result) => { 
                    console.log("3", result) 
                    return res.redirect('/admin/productos')})
                   .catch(error => console.log(error))
                })
                .catch(error => console.log(error))
              })
              .catch(error => console.log(error))
          }else{
              res.redirect('/admin/productos')
          }
        }).catch(error => console.log(error))
      }else{
        let idProducto = +req.params.id;
        let productPromise = db.Product.findByPk(idProducto);
        let categoriesPromise = db.Category.findAll(); 

        Promise.all([productPromise , categoriesPromise ])
        .then(([producto, categories]) => {
          res.render('admin/pages/productos/editarProducto', {
            titulo: "Edición",
            producto,
            categories, 
            errors: errors.mapped(),
            old: req.body,
            session: req.session
          })
        })
        .catch(error => console.log(error))
      }
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
