const { body } = require("express-validator");
const fs = require("fs");
const path = require("path");

const validations = [
  body("brand")
    .notEmpty()
    .withMessage("Debe ingresar una marca para el producto"),
  body("name").notEmpty().withMessage("Debe ingresar un nombre al producto"),
  body("description")
    .notEmpty()
    .isLength({ min: 5, max: 50 })
    .withMessage("Debe ingresar una descripción al producto"),
  body("year")
    .notEmpty()
    .withMessage("Debe ingresar el año del modelo del producto"),
  body("category")
    .notEmpty()
    .withMessage("Debe ingresar la categoria del producto"),
  body("size").notEmpty().withMessage("Debe aclarar el talle del producto"),
  body("price").notEmpty().withMessage("Debe ingresar un precio al producto"),
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
