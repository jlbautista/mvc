const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcryptjs');

const User = sequelize.define(
    'users', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        hooks: {
            beforeCreate: async (user) => {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        }
    }
);

module.exports = User;