const Product = require('../model/Product');

exports.addProduct = async (req, res) => {
    try {        
            const product = new Product({
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price
            });
        
            let data = await product.save();
            res.status(201).json({ data });
        } catch (err) {
            res.status(400).json({ err: err });
      }
}

exports.getProducts = async (req, res) => {
    try {
        const response = await Product.find()
        console.log(response)
        res.send(response)
    } catch (error) {
        res.status(400).json( { error })
    }
}

exports.getSingleProduct = async (req, res) => {
    try {
        const response = await Product.findById(req.params.id)
        console.log(response)
        res.send(response)
    } catch (error) {
        res.status(400).json( { error })
    }
}
