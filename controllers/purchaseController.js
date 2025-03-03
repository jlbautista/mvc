const Product = require('../models/product');
const Purchase = require('../models/purchase');
const sequelize = require('../config/db');

exports.buyProduct = async (req, res) => {
    const { productId, quantity } = req.body;

    const transaction = await sequelize.transaction();
    try {
        const product = await Product.findByPk(productId, { transaction });
        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        if (product.stock < quantity) {
            return res.status(400).json({ success:false, error: 'Not enough stock' });
        }

        const total = product.price * quantity;
        const purchase = await Purchase.create({ productId, quantity, total }, { transaction });
        
        product.stock -= quantity;
        await product.save({ transaction });
        
        await transaction.commit();
        res.status(201).json({ success: true, data: purchase});
    } catch (error) {
        await transaction.rollback();
        res.status(500).json({ success: false, error: error.message });
    }
}   



