import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
// const cors = require('cors')
import userRouter from './routes/userRouter.js'

dotenv.config();

const app = express();

var corsOptions = {
    origin: 'https://crumple.netlify.app',
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://crumple.netlify.app"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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
