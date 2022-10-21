const {body} = require("express-validator");

const loginValidation = [
    body("email").notEmpty().withMessage("Debes ingresar tu email"),
    body("password").notEmpty().withMessage("Debes ingresar tu password"),

]

module.exports = loginValidation;