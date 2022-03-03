const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    items: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cart'
    }],
    totalPrice: {
      type: Number
    },
    address: [],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
  });
  
  const Order = mongoose.model("Order", orderSchema);
  module.exports = Order;