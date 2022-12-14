'use strict';

var express = require('express'),
    ProductController = require('../controllers/products'),
    router = express.Router();

router.get('/', ProductController.home);
router.post('/test', ProductController.test);
router.post('/save-product', ProductController.saveProduct);
router.get('/product/:id?', ProductController.getProduct);
router.get('/products/', ProductController.getProducts);

module.exports = router;