jest.useFakeTimers()
import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mongoose.connect( 'mongodb://localhost/crumple_test' , {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
// });

app.use('/api/users', userRouter);

export default app;
