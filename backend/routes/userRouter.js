import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import seed from '../seed.js';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
        // await User.remove({});
        const createdUsers = await User.insertMany(seed.users);
        res.send({ createdUsers });
    })
);

export default userRouter;