const request = require('supertest');
const app = require('../app');
const Product = require('../models/products');

// Create a new product
describe('Products - create new Product', () => {
    // Clear the database before running the test
    beforeAll(async () => {
        await Product.destroy({ where: {} });
    });

    // Test the creation of a new product
    it('should create a new product', async () => {
        const product = await request(app)
            .post('/api/products')
            .send({
                name: 'Product 3',
                price: 100,
                stock: 10
            });

        expect(product.status).toEqual(201);
        expect(product.body).toHaveProperty('success', true);
        expect(product.body).toHaveProperty('data');
    });
});