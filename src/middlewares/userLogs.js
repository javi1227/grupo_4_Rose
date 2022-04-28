const fs =require ('fs');

const logMiddleware = (req, res, next) => {
    let texto = "El usuario ingresó a la ruta: " +req.url + "\n"
    fs.appendFileSync('src/logs/userLogs.txt', texto);
    next()
}


module.exports =logMiddleware;
