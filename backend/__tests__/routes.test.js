// import app from '../testServer.js'
import request  from 'supertest';
import express from 'express'
import mongoose from 'mongoose';
import seed from '../util/seed.js';
import User from '../models/userModel.js';
import userRouter from '../routes/userRouter';
import {generateToken} from '../util/util.js';
import { Db } from 'mongodb';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mongoose.connect('mongodb://localhost/crumple' , {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
// });

// app.use('/api/users', userRouter);

app.get('/seed', function(req, res) {
    const createdUsers = User.insertMany(seed.users);
    res.status(200).json({ createdUsers })
});

app.post('/signin', async(req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.send(400)
        return
    }

    res.status(200).json({email})
})

describe('User Endpoints', () => {
    it('Should get data from /seed', (done) => {
        jest.useFakeTimers()

        request(app)
            .get('/seed')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it("should respond with a 200 status code", async() => {
        jest.runAllTimers()

        const response = await request(app).post("/signin").send({ 
            email: "user2@example.com", 
            password: '1234' 
        })
        console.log(response.statusCode);
        expect(response.statusCode).toBe(200);
    })

});

