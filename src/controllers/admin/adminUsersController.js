const { getUsers, writeUsers } = require('../../data');

module.exports = {
    /* Envia la vista del listado de productos */
    list: (req, res) => {
        res.render('admin/pages/usuarios/listadoUsuarios', {
            titulo: "Listado de usuarios",
            users: getUsers,
            session: req.session
        })
    },
    /* Envia vista de form de creacion de producto */
    usersAdd: (req, res) => {
        res.render('admin/pages/Usuarios/agregarUsuarios', {
            titulo: "Agregar usuarios",
            session: req.session
        })
    },
    /* recibe datos de form de creacion y guarda */
    usersCreate: (req, res) => {
        let lastId = 0;
        getUsers.forEach(user => {
            if(user.id > lastId){
                lastId = user.id;
            }
        });

        let newUser = {
            ...req.body, 
            id: lastId + 1,
            image: "",
            stock: req.body.stock ? true : false
        }
        
        getUsers.push(newUser)

       writeUsers(getUsers)

       res.redirect('/admin/usuarios')
    },
    /* Envia la vista del form de edicion de prod */
    usersEdit: (req, res) => {
        let idUser = +req.params.id;
        let user = getUsers.find(user => user.id === idUser)
        res.render('admin/pages/usuarios/editarUsuario', {
            titulo: "Edición",
            user,
            session: req.session
        })
    },

    usersUpdate: (req, res) => {
        let idUser = +req.params.id;
        getUsers.forEach(user => {
            if(user.id === idUser){
                user.name = req.body.name
                user.price = req.body.price
                user.discount = req.body.discount
                user.categoryId = req.body.categoryId
                user.projectId = req.body.projectId
                user.stock = req.body.stock ? true : false
                user.description = req.body.description
            }
        })

        writeUsers(getUsers);

        res.redirect('/admin/Usuarios');
    },
    
    usersDelete: (req, res) => {     
        let idUser = +req.params.id;
        getUsers.forEach(user => {
            if(user.id === idUser){           
                let userToDeleteIndex = getUsers.indexOf(user);              
                getUsers.splice(userToDeleteIndex, 1)
            }
        })
        writeUsers(getUsers);
        res.redirect('/admin/usuarios')
    },
    usersSearch: (req, res) => {

    },
}
