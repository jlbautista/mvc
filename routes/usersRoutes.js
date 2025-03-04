const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.post('/', usersController.create);
router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUser);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.delete);

module.exports = router;