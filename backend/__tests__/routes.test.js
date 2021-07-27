jest.useFakeTimers()

import app from '../testServer.js'
import request  from 'supertest';

describe('User Endpoints', () => {
    it('Should get data from /seed', async () => {
        const response = await request(app).get('/seed');
        console.log(response.body)
        expect(response.statusCode).toEqual(200);
        // expect(response.body).toHaveProperty('createdUsers');
    })

    // it('should post to /signin', async () => {
    //     const response = await request(app)
    //         .post('/signin')
    //         .send({
    //             email: 'admin1@example.com',
    //             password: 1234
    //         })
    //         console.log(response)
    //     expect(response.body).toHaveProperty('user');

    // });



});

