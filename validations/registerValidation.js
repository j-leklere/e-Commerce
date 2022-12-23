const { body } = require("express-validator");
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
  body("image").custom(function (value, { req }) {
    let file = req.file;
    let acceptedExtensions = [".jpg", "jpeg", ".png", ".gif"];

    if (!file) {
      throw new Error("Debes subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones permitidas son ${acceptedExtensions.join(",")} `
        );
      }
    }
    return true;
  }),
];
module.exports = validations;
