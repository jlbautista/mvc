const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.post('/', productsController.create);
router.get('/', productsController.getProducts);
router.get('/:id', productsController.getProduct);
router.put('/:id', productsController.update);
router.delete('/:id', productsController.delete);

module.exports = router;