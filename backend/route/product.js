const express = require('express')
const router = express.Router();
const auth = require('../config/auth')
const admin = require('../config/adminAuth')
const productController = require('../controller/productController')

router.post('/add-product',auth, productController.addProduct)
router.get('/products', productController.getProducts)
router.get('/products/cart/:id', productController.getSingleProduct)
router.post('/addToCart/:id',auth, productController.addToCart)


module.exports = router