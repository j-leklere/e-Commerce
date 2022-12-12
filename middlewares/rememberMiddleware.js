const fs = require('fs');
const path = require('path');
const db = require("../database/models");


const Users = db.User;

function findAll() {
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/users.json"));
    const data = JSON.parse(jsonData);
    return data;
    }

function recordame(req, res, next) {
    if(req.cookies.recordame && !req.session.usuarioLogueado){
        // const users = findAll();

        // const userFound = users.find(function(user){
        //     return user.id == req.cookies.recordame
        // })

        Users.findOne({
            where: {id: req.cookies.recordame}
        }) 
        .then((userFound) => {
            req.session.usuarioLogueado = {
                id: userFound.id,
                name: userFound.nombre,
                email: userFound.email,
                image: userFound.image
            };
            return next();
        })
    } else {
        next();
    }
}



module.exports = recordame;