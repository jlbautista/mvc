const { where } = require('sequelize');
const User = require('../models/users');

// Create a new user
exports.create = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get a user by id
exports.getUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update a user by id
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        await user.update(req.body);
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a user by id
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.destroy({ where: { id } });

        if (!deleted) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};