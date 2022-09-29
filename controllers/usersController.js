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

const usersController = {
  login: (req, res) => {
    res.render("../views/users/login", { usuarios: usuarios });
  },
  register: (req, res) => {
    res.render("../views/users/register");
  },
  crearEditar: (req, res) => {
    res.render("../views/users/crearEditar.ejs", {
      categorias: categorias,
      tallas: tallas,
    });
  },
};

module.exports = usersController;
