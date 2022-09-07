const express = require('express');

const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/product', productsController.product);

router.get('/productCart', productsController.productCart);

router.get('/productDetail', productsController.productDetail);

router.get('/productFutbol', productsController.productFutbol);

module.exports = router;