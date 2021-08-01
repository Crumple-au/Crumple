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

// app.use('/api/users', userRouter);

app.get('/seed', function(req, res) {
    const createdUsers = User.insertMany(seed.users);
    res.status(200).json({ createdUsers })
});

app.post(
    '/signin', 
    async(req, res) => {
        const { email, password } = req.body
        if (!email || !password) {
            res.send(400)
        }

        res.status(200).json({email})
});

app.post(
    '/register', 
    async(req, res) => {
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
        });
        if (user) {
            res.status(200).json(user);
        }
        // const createdUser = await user.save();
        // res.status(200).send({
        //     _id: createdUser._id,
        //     email: createdUser.email,
        //     isAdmin: createdUser.isAdmin,
        //     isSeller: user.isSeller,
        //     token: generateToken(createdUser),
        // });
    }
);

// app.post('/sumArrayOfNumbers', (req, res) => {
//     let arrayOfNumbers = req.body.submittedNumbers;

//     let sumOfAoN = arrayOfNumbers.reduce((total, nextNumber) => {
//         return total += nextNumber;
//     });

//     res.json({
//         sum: sumOfAoN
//     });
// });

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
        console.log(response.body)
        expect(response.statusCode).toEqual(200);
    })

    // it('Should return 55 when given an array of 1-10.', async () => {
    //     // Build & make the request:
    //     const res = await request(app)
	// 		.post('/sumArrayOfNumbers')
	// 		.send({
	// 			submittedNumbers: [1,2,3,4,5,6,7,8,9,10]
	// 		});
		
	// 	// Check the result of the request:
	// 	expect(res.statusCode).toEqual(200);
		
	// });


});


