const request = require('supertest');
const app = require('../app');
const Product = require('../models/products');

// Create a new product
describe('Products - create new Product', () => {
    it('should create a new product', async () => {
        const product = await request(app)
            .post('/api/products')
            .send({
                name: 'Product 3',
                price: 100,
                stock: 10
            });

        console.log(product);

        expect(product.status).toEqual(201);
        expect(product.body).toHaveProperty('success', true);
        expect(product.body).toHaveProperty('data');
    });
});