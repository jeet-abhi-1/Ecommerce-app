const express = require('express')
const router = express.Router();
const auth = require('../config/auth')
const productController = require('../controller/productController')

router.post('/add-product', productController.addProduct)
router.get('/products', productController.getProducts)
router.get('/products/cart/:id', productController.getSingleProduct)
router.post('/addToCart/:id',auth, productController.addToCart)


module.exports = router