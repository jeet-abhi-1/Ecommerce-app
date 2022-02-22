const express = require('express')
const router = express.Router();
const productController = require('../controller/productController')

router.post('/add-product', productController.addProduct)
router.get('/products', productController.getProducts)
router.get('/products/cart/:id', productController.getSingleProduct)

module.exports = router