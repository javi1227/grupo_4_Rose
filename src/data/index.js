const fs = require('fs');
const path = require('path');

module.exports = {
    getProducts: JSON.parse(fs.readFileSync(path.join(__dirname, "/products.json"), "utf-8")),
    writeProducts: (data) => {
        fs.writeFileSync(path.join(__dirname, "/products.json"), JSON.stringify(data))
    },
    getCategories: JSON.parse(fs.readFileSync(path.join(__dirname, "/categories.json"), "utf-8")),
    getUsers: JSON.parse(fs.readFileSync(path.join(__dirname, "/users.json"), "utf-8")),
    /* writefilesync escribe un archivo, 1er parametro: archivo 2do: la info a pasar*/
    writeUsers:(data) => {
        fs.writeFileSync(path.join(__dirname, "/users.json"), JSON.stringify(data))
    },
        
}