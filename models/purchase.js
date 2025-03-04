const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Product = require('./products');

const purchase = sequelize.define('Purchase', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    productId: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id'
        }, 
        allowNull: false
    }
});

module.exports = purchase;