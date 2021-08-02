import request  from 'supertest';
import app from '../server.js'
import seed from '../util/seed.js';
import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler';
import {generateToken} from '../util/util.js';
import {removeAllCollections, dropAllCollections } from './helpers';
import bcrypt from 'bcryptjs';

let testUser = {
    email: "king@example.com",
    password: "1234"
};

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
        res.status(400).send({ message: 'Invalid email or password' });
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

    it("should POST to '/signin' and respond with a 400 status code", async() => {

        const response = await request(app)
            .post("/signin")
            .send({ 
                email: "NoUser@example.com", 
                password: '1234' 
            })
        expect(response.statusCode).toBe(400);
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

    it("should POST to '/register' and respond with a 400 status code", async() => {

        const response = await request(app)
            .post('/register')
            .send({
                email: "NoUser@example.com", 
                password: undefined  
            });

        expect(response.statusCode).toEqual(500);
    });

});


