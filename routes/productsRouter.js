const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const multer = require("multer");
const path = require("path");

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
router.get("/products", productsController.list);

// Vista de creación de producto
router.get("/products/create", productsController.create);
router.post(
  "/products/create",
  upload.single("image"),
  productsController.store
);

// Vista de detalle de producto
router.get("/products/:id", productsController.detail);

// Vista de edición de producto
router.get("/products/:id/edit", productsController.edit);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.destroy);

// Vistas creadas pre-Sprint4
router.get("/product", productsController.product);

router.get("/productCart", productsController.productCart);

router.get("/productDetail", productsController.productDetail);

router.get("/productFutbol", productsController.productFutbol);

module.exports = router;
