import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import seed from '../util/seed.js';
import User from '../models/userModel.js';
import {generateToken,
        isAuth, 
        isAdmin,
        mailgun,
        registerEmailTemplate} from '../util/util.js';

const userRouter = express.Router();

// create user data samples
userRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
        const createdUsers = await User.insertMany(seed.users);
        res.send({ createdUsers });
    })
);

// Post signin data
userRouter.post(
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
        } else {
            return res.status(401).send({ error: 'Invalid email or password' });
        }
    })
);

// Post register user data
userRouter.post(
    '/register',
    expressAsyncHandler(async (req, res) => {
        try {
            const existingUser = await User.findOne({email: req.body.email})
            if (existingUser){
                res.status(400).send({error: 'Email already exists!'})
            }
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 8),
            });
            const createdUser = await user.save();
            res.status(200).send({
                _id: createdUser._id,
                name: createdUser.name,
                email: createdUser.email,
                isAdmin: createdUser.isAdmin,
                isSeller: user.isSeller,
                token: generateToken(createdUser),
            });
        } catch(error) {
            res.status(500).send({error: error})
        }
        
    })
);

//get user profile
userRouter.get(
    '/profile/:id',
    expressAsyncHandler(async (req, res) => {
        const user = await User.findById(req.params.id);
        if (user) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                description: user.description,
                image: user.image,
                isAdmin: user.isAdmin,
                isSeller: user.isSeller
            });
        } else {
            res.status(404).send({ message: 'User Not Found' });
        }
    })
);

//edit user
userRouter.put(
    '/profile/edit/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const user = await User.findById(req.params.id);
        console.log("USERROUTER PROFILE PUT: ", req.body.images)
        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            user.description = req.body.description || user.description;
            user.image = req.body.images || user.image;

            const updatedUser = await user.save();
            res.send({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                description: updatedUser.description,
                image: updatedUser.image,
                isAdmin: user.isAdmin,
                isSeller: user.isSeller,
                token: generateToken(updatedUser),
            });
        }
        else {
            res.status(404).send({ message: 'User Not Found' });
        }
    })
);

// get all users
userRouter.get(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const users = await User.find({});
        res.send(users);
    })
);

//Delete users / rn only admins can delete a user
userRouter.delete(
    '/delete/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const user = await User.findById(req.params.id);
        if (user) {
            if (user.email === 'admin1@example.com' || user.email === 'admin2@example.com') {
                res.status(400).send({ message: 'Can Not Delete Admin User' });
                return;
            }
            const deleteUser = await user.remove();
            res.send({ message: 'User Deleted', user: deleteUser });
        } else {
            res.status(404).send({ message: 'User Not Found' });
        }
    })
)

export default userRouter;