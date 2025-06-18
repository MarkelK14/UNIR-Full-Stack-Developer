const request = require('supertest');
const { connect, disconnect } = require('mongoose');

const app = require('../../src/app');
const Student = require('../../src/models/students.model');

describe('Students API', () => {

    beforeAll(async () => {
        await connect('mongodb://localhost:27017/crmestudiantes');
    });

    afterAll(() => {
        disconnect();
    })

    describe('GET /api/students', () => {

        let response;
        beforeAll(async () => {
            response = await request(app).get('/api/students').send();
        });

        it('debería responder con status 200', () => {
            expect(response.status).toBe(200);
        });

        it('debería retornar un JSON', () => {
            expect(response.headers['content-type']).toContain('application/json');
        });

        it('debería retornar un array', () => {
            expect(response.body).toBeInstanceOf(Array);
        });

    });

    describe('POST /api/students', () => {

        let response;
        let body = { name: 'Roberto', email: 'rober@gmail.com', address: 'Call Gran Vía 23', phone: '991291291' };
        beforeAll(async () => {
            response = await request(app).post('/api/students').send(body);
        });

        afterAll(async () => {
            await Student.findByIdAndDelete(response.body._id);
        });

        it('debería funcionar la URL', () => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('application/json');
        });

        it('debería retornar el _id del nuevo estudiante', () => {
            expect(response.body._id).toBeDefined();
        });

        it('debería ver los datos del body en la BD', () => {
            expect(response.body.name).toBe(body.name);
            expect(response.body.email).toBe(body.email);
            expect(response.body.address).toBe(body.address);
            expect(response.body.phone).toBe(body.phone);
        });

    });

    describe('PUT /api/students/STUDENT_ID', () => {

        let student;
        let response;
        let body = { name: 'Roberto', email: 'rober@gmail.com', address: 'Call Gran Vía 23', phone: '991291291' };
        const updateData = { email: 'roberto@gmail.com', phone: "902202122" }
        beforeAll(async () => {
            console.log('Creamos nuevo estudiante');
            // Creo un estudiante en la BD
            student = await Student.create(body)
            // Lanzo la petición
            response = await request(app)
                .put(`/api/students/${student._id}`)
                .send(updateData);
        });

        afterAll(async () => {
            console.log(`Borramos el estudiante ${student.name}`);
            await Student.findByIdAndDelete(student._id);
        });

        it('debería funcionar la URL', () => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('application/json');
        });

        it('debería responder con el estudiante actualizado', () => {
            expect(response.body.email).toBe(updateData.email);
            expect(response.body.phone).toBe(updateData.phone);
        })

    });

    describe('DELETE /api/students/STUDENT_id', () => {

        let response;
        let student;
        let body = { name: 'Roberto', email: 'rober@gmail.com', address: 'Call Gran Vía 23', phone: '991291291' };
        beforeAll(async () => {
            student = await Student.create(body);
            response = await request(app).delete(`/api/students/${student._id}`);
        });

        it('debería funcionar la URL', () => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('application/json');
        });

        it('el estudiante no debería estar en la BD', async () => {
            const deletedStudent = await Student.findById(student._id);
            expect(deletedStudent).toBeNull();
        });

    });

});