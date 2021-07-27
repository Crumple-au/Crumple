jest.useFakeTimers()

// import app from '../testServer.js'
import request  from 'supertest';
import express from 'express'
import mongoose from 'mongoose';
import seed from '../util/seed.js';
import User from '../models/userModel.js';
import userRouter from '../routes/userRouter';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);
app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
});

app.get('/seed', function(req, res) {
    const createdUsers = User.insertMany(seed.users);
    res.status(200).json({ createdUsers })
})
describe('User Endpoints', () => {
    it('Should get data from /seed', (done) => {
        request(app)
            .get('/seed')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
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

