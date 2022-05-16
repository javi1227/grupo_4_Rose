const {getProducts} = require('../../data');

module.exports = {
    index: (req, res) => {
        res.render('admin/index', {
            titulo: "Admin",
            productos: getProducts,
            session: req.session
        });
    }
}
