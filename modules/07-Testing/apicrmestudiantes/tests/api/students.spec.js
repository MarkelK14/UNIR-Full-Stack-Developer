const request = require('supertest');

const app = require('../../src/app');

describe('Students API', () => {

    describe('GET /api/students', () => {

        it('debería responder con status 200', async () => {
            const response = await request(app).get('/api/students').send();
            expect(response.status).toBe(200);
        });

        it('debería retornar un JSON', async () => {
            const response = await request(app).get('/api/students').send();
            expect(response.headers['content-type']).toContain('application/json');
        });

        it('debería retornar un array', async () => {
            const response = await request(app).get('/api/students').send();
            expect(response.body).toBeInstanceOf(Array);
        });

    });

})