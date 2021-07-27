import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/userRouter.js'
import mongodb_database from './config.js'

dotenv.config();

const app = express();

const corsOptions = {
    origin: 'https://crumple.netlify.app',
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || mongodb_database , {
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
    console.log(`Node environment is set to ${process.env.NODE_ENV}`)
    console.log(`Example app listening at http://localhost:${port}`)
});
