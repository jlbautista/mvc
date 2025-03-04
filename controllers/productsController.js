const Product = require('../models/products');
const sequelize = require('../config/db');

// Create a new product
exports.create = async (req, res) => {
    const { name, stock, price } = req.body;

    try {
        const product = await Product.create({ name, stock, price });
        res.status(201).json({ success: true, data: product });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get a product by id
exports.getProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        res.status(200).json({ success: true, data: product });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update a product by id
exports.update = async (req, res) => {
    const { id } = req.params;
    const { name, stock, price } = req.body;

    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        product.name = name;
        product.stock = stock;
        product.price = price;

        await product.save();
        res.status(200).json({ success: true, data: product });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Delete a product by id
exports.delete = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        await product.destroy();
        res.status(204).json({ success: true, data: {}, message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
