const {getProducts} = require('../../data');

module.exports = {
    index: (req, res) => {
        res.render('admin/adminIndex', {
            titulo: "Admin",
            productos: getProducts,
            session: req.session
        });
    }
}
