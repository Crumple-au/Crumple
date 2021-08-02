import request  from 'supertest';
// const {app} = require('../server.js');
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
// jest.setTimeout(60000);

jest.useFakeTimers()
jest.runAllTimers()

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

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/crumple_test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    console.log("done in beforeAll")
});

// beforeEach(async (done) => {
//     const user = new User({
//         email: testUser.email,
//         password: bcrypt.hashSync(testUser.password, 8),
//     });
//     if (!user) {
//         console.log("User was not created!");
//     }
//     await user.save();
//     console.log("done in beforeEach")
//     done()
// });

// afterAll(async () => {
//     await dropAllCollections();
//     await mongoose.connection.close();
//     console.log("done in afterAll")

// });

// afterEach(async () => {
//     try {
//         await removeAllCollections();
//     } catch (error) {
//         console.error("error in deleting user", error);
//     }
//     console.log("done in afterEach")

// });

// app.get('/seed', function(req, res) {
//     const createdUsers = User.insertMany(seed.users);
//     res.status(200).json({ createdUsers })
// });

app.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
        const createdUsers = await User.insertMany(seed.users);
        res.status(200).send({ createdUsers });
    })
);

// app.post(
//     '/signin', 
//     (req, res) => {
//         const { email, password } = req.body
//         if (!email || !password) {
//             res.send(400)
//         }

//         res.status(200).json({email})
// });

// app.post(
//     '/register', 
//     (req, res) => {
//         try{
//             const user = new User({
//                 email: req.body.email,
//                 password: bcrypt.hashSync(req.body.password, 8),
//             });
//             if (user) {
//                 const createdUser = user.save();
//                 res.status(200).send({
//                     _id: createdUser._id,
//                     email: createdUser.email,
//                     isAdmin: createdUser.isAdmin,
//                     isSeller: createdUser.isSeller,
//                     token: generateToken(createdUser),
//                 });
//             }   
//         } catch(e) {
//             res.status(400).json({message: 'User could not be saved'})
//         }
//     }
// );

// app.get(
//     '/profile/:id',
//     (req, res) => {
//         try{
//             const user = User.findById(req.params.id);
//             if (user && req.params.id) {
//                 res.status(200).send({
//                     _id: user._id,
//                     name: user.name,
//                     email: user.email,
//                     description: user.description,
//                     isAdmin: user.isAdmin,
//                     isSeller: user.isSeller
//                 });
//             }
//         } catch(e) {
//             res.status(404).json({ message: 'User Not Found' });
//         }
//     }
// )

describe('Home page route exists.', () => {
	it("Server 'homepage' can be viewed just fine.", async () => {
		const res = await request(app).get('/');
		expect(res.statusCode).toEqual(200);
	});
});

// describe('User Endpoints', () => {

//     it('Should get data from /seed', (done) => {

//         request(app)
//             .get('/seed')
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(200, done);
//     });

//     it("should respond with a 200 status code", async() => {

//         const response = await request(app).post("/signin").send({ 
//             email: "user2@example.com", 
//             password: '1234' 
//         })
//         expect(response.statusCode).toBe(200);
//     });

//     it("should respond with a 200 status code", async() => {

//         const response = await request(app)
//             .post('/register')
//             .send({
//                 email: "user5@example.com", 
//                 password: '1234'  
//             });

//         expect(response.statusCode).toEqual(200);
//     });

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

// });


