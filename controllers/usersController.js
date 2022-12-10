const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models");
const sequelize = db.sequelize;

const Users = db.User;
const Categories = db.Category;

/*function findAll() {
  const jsonData = fs.readFileSync(path.join(__dirname, "../data/users.json"));
  const data = JSON.parse(jsonData);
  return data;
}

function writeFile(data) {
  const stringData = JSON.stringify(data, null, 4);
  fs.writeFileSync(path.join(__dirname, "../data/users.json"), stringData);
}*/

const usersController = {
  login: (req, res) => {
    res.render("../views/users/login");
  },
  processLogin: (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.render("../views/users/login", {
        errors: error.mapped(),
      });
    }
    console.log('hola')
    Users.findOne({
      where: {email: req.body.email}
    }).then((userFound) => {
      if (userFound && bcryptjs.compareSync(req.body.password, userFound.password)) {
        req.session.usuarioLogueado = {
          id: userFound.id,
          name: userFound.nombre,
          email: userFound.email,
          image: userFound.image,
        }
        console.log('hola 1');
        console.log(userFound);
        if (req.body.remember) {
          console.log('hola 2');
          res.cookie("recordame", userFound.id);
        }
        res.redirect('/');
      } else {
        res.render('users/login', {
          errorLogin: "Email o contraseña incorrectos",
        })
      }
    });
  },
  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("recordame");
    res.redirect("/");
  },
  register: (req, res) => {
    Categories.findAll().then(function (categories) {
      res.render("../views/users/register", { categories });
    });
    // res.render("../views/users/register");
  },
  // En caso de no usar base de datos
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
      category_id: req.body.category,
      password: bcryptjs.hashSync(req.body.password, 10),
    }).then(function () {
      res.redirect("/users/login");
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
    Users.findByPk(req.session.usuarioLogueado.id);
    let userId = Users.findByPk(req.session.usuarioLogueado.id);
    let categoryRequest = Categories.findAll();
    Promise.all([userId, categoryRequest]).then(function ([user, categories]) {
      res.render("../views/users/profileView", { user, categories });
    });
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
    let userId = Users.findByPk(req.session.usuarioLogueado.id);
    let categoryRequest = Categories.findAll();
    Promise.all([userId, categoryRequest]).then(function ([user, categories]) {
      res.render("../views/users/profileEdition", { user, categories });
    });

    // En caso de no usar base de datos:
    // const data = findAll();
    // const userFound = data.find(function (user) {

    //   return user.id == req.session.usuarioLogueado.id
    // });
    // res.render("../views/users/profileEdition", {
    //   user: userFound,
    // });
  },

  update: async (req, res) => {
    await Users.update({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaDeNacimiento: req.body.fechaDeNacimiento,
        genero: req.body.genero,
        telefono: req.body.telefono,
        email: req.body.email,
        image: req.file ? req.file.filename : req.body.image,
        category_id: req.body.category,
      },
      {
        where: {
          id: req.session.usuarioLogueado.id
        },
      }
    )
        res.redirect("/users/profileView")
  

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
