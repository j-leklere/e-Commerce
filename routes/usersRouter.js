const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();
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

const upload = multer({ storage });

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
