const {body} = require("express-validator");
const fs = require("fs");
const path = require("path");

const validations = [
  body("nombre").notEmpty().withMessage("Debe ingresar su nombre"),
  body("apellido").notEmpty().withMessage("Debe ingresar su apellido"),
  body("fechaDeNacimiento")
    .notEmpty()
    .withMessage("Debe ingresar su fecha de nacimiento"),
  body("genero").notEmpty().withMessage("Debe ingresar su genero"),
  body("telefono").notEmpty().withMessage("Debe ingresar su telefono"),
  body("email")
    .notEmpty()
    .withMessage("Debe completar este campo")
    .isEmail()
    .withMessage("Debe ingresar un email válido"),
  body("password").notEmpty().withMessage("Debe ingresar su contraseña"),
  body("image").custom(function(value, {req}){
    return req.file;
})
.withMessage('Debe ingresar una imagen de perfil')
.bail()
.custom(function(value, {req}){
    const extensionesAceptadas = ['.jpg', '.png', '.gif'];
    const extension = path.extname(req.file.originalname);
    console.log(extensionesAceptadas.includes(extension))
    return extensionesAceptadas.includes(extension);
}).withMessage('Imagen invalida. Las extensiones aceptadas son jpg, png y gif')
];

module.exports = validations;
