import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js'

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/crumple', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const port = process.env.PORT || 5000;

app.get('/', (req, res) => { 
    res.send('Hello from Express!')
})
app.use('/api/users', userRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
