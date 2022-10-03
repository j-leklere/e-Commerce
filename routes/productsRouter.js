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
router.get("/products/edit/:id", productsController.edit);
router.put("/products/edit/:id", upload.single("image"), productsController.update);

router.delete("/products/delete/:id", productsController.destroy);


// Vistas creadas pre-Sprint4
router.get("/products/categories", productsController.categories);

router.get("/productCart", productsController.productCart);

// router.get("/productDetail", productsController.productDetail);

router.get("/productFutbol", productsController.productFutbol);

module.exports = router;
