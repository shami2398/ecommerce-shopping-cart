const Cart = require("../models/cart");

exports.addToCart = async (req, res) => {
    try {
        const cart = await Cart.create(req.body);

        res.status(201).json({
            message: "Added To Cart",
            cart
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCart = async (req, res) => {
    try {
        const cartItems = await Cart.find()
            .populate("userId")
            .populate("productId");

        res.json(cartItems);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCartItem = async (req, res) => {
    try {

        await Cart.findByIdAndDelete(req.params.id);

        res.json({
            message: "Item Removed Successfully"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};