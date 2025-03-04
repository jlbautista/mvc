const request = require('supertest');
const app = require('../app'); 
const Purchase = require('../models/purchase');
const Product = require('../models/products');

describe('Purchase Controller - buy', () => {
    // Clear the database before each test
    beforeEach(async () => {
        await Purchase.destroy({ where: {} });
        await Product.destroy({ where: {} });
    });

    // Create a new purchase
    it('should create a new purchase', async () => {
        const product = await request(app)
            .post('/api/products')
            .send({ 
                name: 'Product 1', 
                price: 100, 
                stock: 10 
            });

        const mockPurchase = { 
            productId: product.body.data.id,
            quantity: 5
        };

        const response = await request(app)
            .post('/api/purchase')
            .send(mockPurchase);

        expect(response.status).toBe(201);
        expect(response.body.data).toHaveProperty('id');
        expect(response.body.data.productId).toBe(mockPurchase.productId);
        expect(response.body.data.quantity).toBe(mockPurchase.quantity);
    });

    // Create a new purchase with invalid product
    it('should return 404 for invalid product', async () => {
        const mockPurchase = { 
            productId: 1,
            quantity: 5
        };

        const response = await request(app)
            .post('/api/purchase')
            .send(mockPurchase);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('error');
    });

    // Create a new purchase with insufficient stock
    it('should return 400 for insufficient stock', async () => {
        const product = await request(app)
            .post('/api/products')
            .send({ 
                name: 'Product 2', 
                price: 100, 
                stock: 10 
            });

        const mockPurchase = { 
            productId: product.body.data.id,
            quantity: 15
        };

        const response = await request(app)
            .post('/api/purchase')
            .send(mockPurchase);

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
    });
});
