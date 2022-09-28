const express = require('express');

const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/product', productsController.product);

router.get('/products', productsController.list);

router.post('/products', productsController.store);

router.get('/products/create', productsController.create);

router.get('/products/:id', productsController.detail);

router.get('/products/:id/edit', productsController.edit);

router.put('/products/:id', productsController.update);

router.delete('/products/:id', productsController.destroy);

router.get('/productCart', productsController.productCart);

router.get('/productDetail', productsController.productDetail);

router.get('/productFutbol', productsController.productFutbol);

module.exports = router;