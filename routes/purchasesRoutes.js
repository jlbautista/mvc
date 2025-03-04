const express = require('express');
const router = express.Router();
const purchasesController = require('../controllers/purchasesController');

router.post('/', purchasesController.buyProduct);

module.exports = router;