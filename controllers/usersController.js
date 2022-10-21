const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

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
      return user.email ==
        req.body.email &&
        bcryptjs.compareSync(req.body.password, user.password);
    });
    if (!userFound) {
      return res.render("../views/users/login", {errorLogin: "Email o contraseña incorrectos"});
    } else {
      req.session.usuarioLogueado = {
        id: userFound.id,
        name: userFound.nombre,
        email: userFound.email,
      };
      res.redirect("/");
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/");
  },
  register: (req, res) => {
    res.render("../views/users/register");
  },
  crearEditar: (req, res) => {
    res.render("../views/users/crearEditar", {
      categorias: categorias,
      tallas: tallas,
    });
  },
  processRegister: (req, res) => {
    const error = validationResult(req);
    console.log(error);
    if (!error.isEmpty()) {
      return res.render("../views/users/register", {
        errors: error.mapped(),
        old: req.body,
      });
    }
    const users = findAll();

    const newUser = {
      id: users.length + 1,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      fechaDeNacimiento: req.body.fechaDeNacimiento,
      genero: req.body.genero,
      telefono: req.body.telefono,
      email: req.body.email,
      image: req.file.filename,
      password: bcryptjs.hashSync(req.body.password, 10),
    };

    users.push(newUser);

    writeFile(users);

    res.redirect("/users/login");
  },
};

module.exports = usersController;
