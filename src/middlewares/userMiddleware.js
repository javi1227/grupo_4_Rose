// importar JSON de usuarios administradores y cambiarlo por el let usersAdmin

let usersAdmin = ["Javier","Igor","Tobias","Noelia"];   

const adminMiddleware= (req, res, next) => {
    if(usersAdmin.includes(req.query.name)) {
        next();
    } else {
        res.send("No tienes permisos para ingresar")
    }

}
module.exports = adminMiddleware;
