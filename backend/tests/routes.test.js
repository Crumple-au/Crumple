import request  from 'supertest';
import app from '../server.js'
import express from 'express'
import mongoose from 'mongoose'
import seed from '../util/seed.js';
import User from '../models/userModel.js';
import {jest} from '@jest/globals';
import expressAsyncHandler from 'express-async-handler';
import userRouter from '../routes/userRouter';
import {generateToken, isAuth, isAdmin} from '../util/util.js';
import bcrypt from 'bcryptjs';

// jest.useFakeTimers()
// jest.runAllTimers()

let testUser = {
    email: "king@example.com",
    password: "1234"
};

async function removeAllCollections() {
    const collections = Object.keys(mongoose.connection.collections);
    for (const collectionName of collections) {
        const collection = mongoose.connection.collections[collectionName];
        await collection.deleteMany();
    }
}

async function dropAllCollections() {
    const collections = Object.keys(mongoose.connection.collections);
    for (const collectionName of collections) {
        const collection = mongoose.connection.collections[collectionName];
        try {
            await collection.drop();
        } catch (error) {
            // Sometimes this error happens, but you can safely ignore it
            if (error.message === "ns not found") return;
            // This error occurs when you use it.todo. You can
            // safely ignore this error too
            if (error.message.includes("a background operation is currently running"))
            return;
            console.log(error.message);
        }
    }
}

// beforeAll(async () => {
//     await mongoose.connect('mongodb://localhost/crumple_test', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//     });
//     console.log("done in beforeAll")
// });

beforeEach( async () => {
    try{
        const user = new User({
                email: testUser.email,
                password: bcrypt.hashSync(testUser.password, 8)
            });
        await user.save();
    } catch(e) {
        console.log("User was not created!");
    }

});

// afterAll(async () => {
//     await dropAllCollections();
//     await mongoose.connection.close();
// });

afterEach(async () => {
    try {
        await removeAllCollections();
    } catch (error) {
        console.error("error in deleting user", error);
    }
});

app.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
        const createdUsers = await User.insertMany(seed.users);
        res.send({ createdUsers });
    })
);

app.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.status(200).send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    isSeller: user.isSeller,
                    token: generateToken(user),
                });
            }
        }
        res.status(401).send({ message: 'Invalid email or password' });
    })
);

app.post(
    '/register',
    expressAsyncHandler(async (req, res) => {
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
        });
        const createdUser = await user.save();
        res.send({
            _id: createdUser._id,
            email: createdUser.email,
            isAdmin: createdUser.isAdmin,
            isSeller: user.isSeller,
            token: generateToken(createdUser),
        });
    })
);



describe('Home page route exists.', () => {
	it("Server 'homepage' can be viewed just fine.", async () => {
		const res = await request(app).get('/');
		expect(res.statusCode).toEqual(200);
	});
});

describe('User Endpoints', () => {

    it("Should GET '/register' and respond with a 200 status code ", (done) => {

        request(app)
            .get('/seed')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it("should POST to '/signin' and respond with a 200 status code", async() => {

        const response = await request(app)
            .post("/signin")
            .send({ 
                email: "king@example.com", 
                password: '1234' 
            })
        expect(response.statusCode).toBe(200);
    });

    it("should POST to '/register' and respond with a 200 status code", async() => {

        const response = await request(app)
            .post('/register')
            .send({
                email: "queen@example.com", 
                password: '1234'  
            });

        expect(response.statusCode).toEqual(200);
    });

//     it("should repsond with status code 400", async() => {

//         const response = await request(app)
//             .post('/register')
//             .send({
//                 email: "user5@example.com", 
//                 password: undefined  
//             });

//         expect(response.statusCode).toEqual(400);
//     });

//     it("should repsond with status code 200 and user object", async() => {

//         const id = '61024b128def3a27b8211796';
//         const response = await request(app)
//             .get(`/profile/${id}`)

//         expect(response.statusCode).toEqual(200);
//     });

//     it("should repsond with status code 404 and message", async() => {

//         const id = ''
//         const response = await request(app)
//             .get(`/profile/${id}`)

//         expect(response.statusCode).toEqual(404);
//         // expect(response.statusCode).toEqual(404);
//     });

});


