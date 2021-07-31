import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/userRouter.js'
import path from 'path';

dotenv.config();

const app = express();

app.use(cors({
    origin: "https://crumple.netlify.app",
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}));


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

app.use(express.static(__dirname + "/frontend/build"))

if (process.env.NODE_ENV === 'production') {  
    app.use(express.static(path.join(__dirname, "/frontend/build")));
    app.get("/*", (_, res) => {
        res.sendFile(path.join(__dirname, "/frontend/build/", "index.html"));
    });
}

const __dirname = path.resolve();

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
