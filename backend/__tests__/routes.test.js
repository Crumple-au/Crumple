import request  from 'supertest';
import express from 'express'
import seed from '../util/seed.js';
import User from '../models/userModel.js';
import userRouter from '../routes/userRouter';
import {generateToken} from '../util/util.js';
import bcrypt from 'bcryptjs';

jest.useFakeTimers()
jest.runAllTimers()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/seed', function(req, res) {
    const createdUsers = User.insertMany(seed.users);
    res.status(200).json({ createdUsers })
});

app.post(
    '/signin', 
    (req, res) => {
        const { email, password } = req.body
        if (!email || !password) {
            res.send(400)
        }

        res.status(200).json({email})
});

app.post(
    '/register', 
    (req, res) => {
        try{
            const user = new User({
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 8),
            });
            if (user) {
                const createdUser = user.save();
                res.status(200).send({
                    _id: createdUser._id,
                    email: createdUser.email,
                    isAdmin: createdUser.isAdmin,
                    isSeller: createdUser.isSeller,
                    token: generateToken(createdUser),
                });
            }   
        } catch(e) {
            res.status(400).json({message: 'User could not be saved'})
        }
    }
);

app.get(
    '/profile/:id',
    (req, res) => {
        try{
            const user = User.findById(req.params.id);
            if (user && req.params.id) {
                res.status(200).send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    description: user.description,
                    isAdmin: user.isAdmin,
                    isSeller: user.isSeller
                });
            }
        } catch(e) {
            res.status(404).json({ message: 'User Not Found' });
        }
    }
)

describe('User Endpoints', () => {

    it('Should get data from /seed', (done) => {

        request(app)
            .get('/seed')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it("should respond with a 200 status code", async() => {

        const response = await request(app).post("/signin").send({ 
            email: "user2@example.com", 
            password: '1234' 
        })
        expect(response.statusCode).toBe(200);
    });

    it("should respond with a 200 status code", async() => {

        const response = await request(app)
            .post('/register')
            .send({
                email: "user5@example.com", 
                password: '1234'  
            });

        expect(response.statusCode).toEqual(200);
    });

    it("should repsond with status code 400", async() => {

        const response = await request(app)
            .post('/register')
            .send({
                email: "user5@example.com", 
                password: undefined  
            });

        expect(response.statusCode).toEqual(400);
    });

    it("should repsond with status code 200 and user object", async() => {

        const id = '61024b128def3a27b8211796';
        const response = await request(app)
            .get(`/profile/${id}`)

        expect(response.statusCode).toEqual(200);
    });

    it("should repsond with status code 404 and message", async() => {

        const id = ''
        const response = await request(app)
            .get(`/profile/${id}`)

        expect(response.statusCode).toEqual(404);
        // expect(response.statusCode).toEqual(404);
    });

});


