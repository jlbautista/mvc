const express = require('express');
const router = express.Router();
const purchasesController = require('../controllers/purchasesController');

/**
 * @swagger
 * /purchases:
 *  post:
 *    tags: [Purchases]
 *    summary: Buy a product
 *    description : Buy a product
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              productId:
 *                type: string
 *              quantity:
 *                type: number
 *    responses:
 *      '200':
 *        description: Product bought
 *      '400':
 *        description: Bad request
 *      '500':
 *        description: Internal server error
 */
router.post('/', purchasesController.buyProduct);

module.exports = router;