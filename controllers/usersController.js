const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require('../database/models');
const sequelize = db.sequelize;

const Users = db.User;

let categorias = [
  {
    id: 1,
    nombre: "Hombres",
  },
  {
    id: 2,
    nombre: "Mujer",
  },
  {
    id: 3,
    nombre: "niños",
  },
  {
    id: 4,
    nombre: "Otros",
  },
];

let tallas = [
  {
    id: 1,
    numero: 7,
  },
  {
    id: 2,
    numero: 8,
  },
  {
    id: 3,
    numero: 9.5,
  },
  {
    id: 1,
    numero: 10,
  },
];

let usuarios = [
  {
    login: "jperezperalta@gmail.com",
    password: 12345,
  },
];

function findAll() {
  const jsonData = fs.readFileSync(path.join(__dirname, "../data/users.json"));
  const data = JSON.parse(jsonData);
  return data;
}

function writeFile(data) {
  const stringData = JSON.stringify(data, null, 4);
  fs.writeFileSync(path.join(__dirname, "../data/users.json"), stringData);
}

const usersController = {
  login: (req, res) => {
    res.render("../views/users/login", { usuarios: usuarios });
  },
  processLogin: (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.render("../views/users/login", {
        errors: error.mapped(),
      });
    }
    const users = findAll();
    const userFound = users.find(function (user) {
      return (
        user.email == req.body.email &&
        bcryptjs.compareSync(req.body.password, user.password)
      );
    });
    if (!userFound) {
      return res.render("../views/users/login", {
        errorLogin: "Email o contraseña incorrectos",
      });
    } else {
      req.session.usuarioLogueado = {
        id: userFound.id,
        name: userFound.nombre,
        email: userFound.email,
        image: userFound.image
      };

      if (req.body.remember) {
        res.cookie("recordame", userFound.id);
      }

      res.redirect("/");
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("recordame");
    res.redirect("/");
  },
  register: (req, res) => {
    res.render("../views/users/register");
  },
  // crearEditar: (req, res) => {
  //   res.render("../views/users/crearEditar", {
  //     categorias: categorias,
  //     tallas: tallas,
  //   });
  // },
  processRegister: (req, res) => {
    const error = validationResult(req);
    console.log(error);
    if (!error.isEmpty()) {
      return res.render("../views/users/register", {
        errors: error.mapped(),
        old: req.body,
      });
    }
    
    Users.create({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      fechaDeNacimiento: req.body.fechaDeNacimiento,
      genero: req.body.genero,
      telefono: req.body.telefono,
      email: req.body.email,
      image: req.file.filename,
      password: bcryptjs.hashSync(req.body.password, 10)
  }) 
  .then(function(){
      res.redirect('/users/login');
  });
    
    // En caso de no usar base de datos: 
  
    // const newUser = {
    //   id: users.length + 1,
    //   nombre: req.body.nombre,
    //   apellido: req.body.apellido,
    //   fechaDeNacimiento: req.body.fechaDeNacimiento,
    //   genero: req.body.genero,
    //   telefono: req.body.telefono,
    //   email: req.body.email,
    //   image: req.file.filename,
    //   password: bcryptjs.hashSync(req.body.password, 10),
    // };

    // users.push(newUser);

    // writeFile(users);

    // res.redirect("/users/login");
    
  },

  editView: (req, res) => {
    let userId = req.session.usuarioLogueado.id;
    Users.findByPk(userId)
    .then(function(user){
        res.render('../views/users/profileView', {user});
    })
    // En caso de no usar base de datos: 
    // const data = findAll();
    // const userFound = data.find(function (user) {

    //   return user.id == req.session.usuarioLogueado.id
    // });
    // res.render("../views/users/profileView", {
    //   user: userFound,
    // });
  },
  edit: (req, res) => {
    let userId = req.session.usuarioLogueado.id
    Users.findByPk(userId)
    .then(function(user){
        res.render('../views/users/profileEdition', {user: userId});
    })
    // En caso de no usar base de datos: 
    // const data = findAll();
    // const userFound = data.find(function (user) {

    //   return user.id == req.session.usuarioLogueado.id
    // });
    // res.render("../views/users/profileEdition", {
    //   user: userFound,
    // });
  },

  update: (req, res) => {
    let userId = req.params.id;
        Users.update({
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          fechaDeNacimiento: req.body.fechaDeNacimiento,
          genero: req.body.genero,
          telefono: req.body.telefono,
          email: req.body.email,
          image: req.file ? req.file.filename : req.body.image
        },{
            where:{
            id: userId
            } 
        })
        .then(function(){
          res.redirect('/users/profileView')
        })
        .catch(error => res.send(error))

    // En caso de no usar base de datos: 
    // const data = findAll();
    // const userFound = data.find(function (user) {
    //   return user.id == req.session.usuarioLogueado.id
    // });
    //   userFound.image = req.file ? req.file.filename : userFound.image
    //   userFound.nombre = req.body.nombre,
    //   userFound.apellido = req.body.apellido,
    //   userFound.fechaDeNacimiento = req.body.fechaDeNacimiento,
    //   userFound.genero = req.body.genero,
    //   userFound.telefono = req.body.telefono,
    //   userFound.email = req.body.email,
    //   userFound.deporteFavorito = req.body.deporteFavorito,
      
    // writeFile(data);

    // res.redirect('/users/profileView');
  },
};

module.exports = usersController;
