const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');

router.post('/buy', purchaseController.buyProduct);

module.exports = router;