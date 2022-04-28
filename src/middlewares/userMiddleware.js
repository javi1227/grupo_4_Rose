let usersAdmin = ["Javier","Igor","Tobias","Noelia"];   

const adminMiddleware= (req, res, next) => {
    if(usersAdmin.includes(req.query.user)) {
        next();
    } else {
        res.send("No tienes permisos para ingresar")
    }

}
module.exports = adminMiddleware;
