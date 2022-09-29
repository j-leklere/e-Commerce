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

router.get("/products", productsController.list);

router.get("/products/create", productsController.create);
router.post(
  "/products/create",
  upload.single("image"),
  productsController.store
);

router.get("/products/:id", productsController.detail);

router.get("/products/:id/edit", productsController.edit);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.destroy);

//
router.get("/product", productsController.product);

router.get("/productCart", productsController.productCart);

router.get("/productDetail", productsController.productDetail);

router.get("/productFutbol", productsController.productFutbol);

module.exports = router;
