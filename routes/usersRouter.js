const express = require("express");
const path = require("path");
const router = express.Router();
const usersController = require("../controllers/usersController");

const multer = require("multer");
const registerValidation = require("../validations/registerValidation");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/avatars"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    let acceptedExtensions = [".jpg", ".png", ".gif"];
    let info = path.extname(file.originalname);
    let result = acceptedExtensions.includes(info);
    if (!result) {
      req.file = file;
    }
    cb(null, result);
  },
});

router.get("/login", usersController.login);
router.get("/register", usersController.register);
router.get("/crearEditar", usersController.crearEditar);

router.post(
  "/register",
  upload.single("image"),
  registerValidation,
  usersController.processRegister
);

module.exports = router;
