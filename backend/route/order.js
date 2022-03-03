const express = require('express');
const auth = require('../config/auth')
const router = express.Router();
const orderController = require('../controller/orderController')

router.post('/place-order', auth, orderController.placeOrder)

module.exports = router