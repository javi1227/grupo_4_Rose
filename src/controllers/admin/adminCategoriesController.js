const { getCategories, writeCategories} = require('../../data');

module.exports = {
    /* Envia la vista de listado de las categorias */
    list: (req, res) => {
      res.render('admin/pages/categorias/listadoCategorias', {
          titulo: "Categorías",
          categorias:  getCategories,
          session: req.session
      })
    },
    /* Envia la vista de formulario de creación de categorias */
    categoryAdd: (req, res) => {
      res.render('admin/pages/categorias/agregarCategorias', 
      { titulo: "Agregar categoría",
       session: req.session
      })
    },
    /* Recibe los datos del form de creación y guarda el categorias en la DB */
    categoryCreate: (req, res) => {
      let lastId = 0;
      getCategories.forEach(categoria => {
        if(categoria.id > lastId){
          lastId = categoria.id
        }
      });
      
      let newCategory = {
        name: req.body.name,
        id: lastId + 1
      };

      getCategories.push(newCategory);

      writeCategories(getCategories);

      res.redirect('/admin/categorias');
    },
    /* Envia la vista de form de edición de categorias */
    categoryEdit: (req, res) => {
      let categoryId = +req.params.id;

      let categoria = getCategories.find(categoria => categoria.id === categoryId)

      res.render('admin/pages/categorias/editarCategorias', {
        titulo: "Editar categoria",
        categoria,
        session: req.session
      })
    },
    /* Recibe los datos actualizados del form de edición */
    categoryUpdate: (req, res) => {
      let categoryId = +req.params.id;
      
      getCategories.forEach(categoria => {
        if(categoria.id === categoryId){
          categoria.name = req.body.name
        }
      });

      writeCategories(getCategories);

      res.redirect('/admin/categorias');
    },
    /* Recibe la info de la categoria a eliminar */
    categoryDelete: (req, res) => {
        let categoryId = +req.params.id;

        getCategories.forEach(categoria => {
            if(categoria.id === categoryId){
                let categoryToDeleteIndex = getCategories.indexOf(categoria);
                getCategories.splice(categoryToDeleteIndex, 1)
            }
        })
       
        writeCategories(getCategories);
       
        res.redirect('/admin/categorias')
    },
    /* Recibe los datos de la categoria a buscar */
    categorySearch: (req, res) => {

    },
}