const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const multer = require("multer");
const path = require("path");
const productCreateValidation = require("../validations/productCreateValidation");
const authMiddleware = require("../middlewares/authMiddleware");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

// Vista de todos los productos
router.get("/", productsController.list);

// Vista de creación de producto
router.get("/create", authMiddleware, productsController.create);
router.post(
  "/create", 
  upload.single("image"),
  productCreateValidation,
  productsController.store
);

// Vistas creadas pre-Sprint4
router.get("/categories", productsController.categories);

router.get("/productCart", productsController.productCart);

// Vista de edición de producto
router.get("/edit/:id", authMiddleware, productsController.edit);
router.put(
  "/edit/:id", 
  upload.single("image"),
  productsController.update
);

router.delete("/delete/:id", authMiddleware, productsController.destroy);

router.get("/futbol", productsController.productFutbol);

router.get("/running", productsController.productRunning);

router.get("/tennis", productsController.productTennis);

router.get("/basket", productsController.productBasket);

// Vista de detalle de producto

router.get("/:id", productsController.detail);

module.exports = router;
