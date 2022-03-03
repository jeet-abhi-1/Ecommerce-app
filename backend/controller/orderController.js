const Cart = require('../model/cart')
const Order = require('../model/order')

exports.placeOrder = async (req, res) => {
    let address = {
        address: req.body.address
    }
    try {
        const cart = await Cart.findOne({ user: req.userData._id })
        console.log(cart)
        let order = new Order({
            items: cart.items,
            totalPrice: cart.totalPrice,
            address: address,
            user: req.userData._id
        })

        let newOrder = await Order.create(order)
        await Cart.findOneAndDelete({user: req.userData._id})
        return res.status(200).send(newOrder)
    } catch (error) {
        console.log(error);
    }
}