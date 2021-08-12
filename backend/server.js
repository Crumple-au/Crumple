import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js'
import artworkRouter from './routes/artworkRoutes.js'
import categoryRouter from './routes/categoryRoutes.js'
import uploadRouter from './routes/uploadRoutes.js'
import orderRouter from './routes/orderRoutes.js'
import cors from 'cors'
import mongodb_database from './config.js'
// var paypal = require('paypal-rest-sdk');
import paypal from 'paypal-rest-sdk'

dotenv.config()

const app = express()

app.use(cors({ origin: '*' }))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGODB_URL || mongodb_database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': process.env.PAYPAL_CLIENT_ID,
  'client_secret': process.env.PAYPAL_SECRET
});

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.status(200).send('Hello from Express!')
})

app.use('/api/users', userRouter)
app.use('/api/artworks', artworkRouter)
app.use('/api/categories', categoryRouter)
app.use('/api/orders', orderRouter)
app.use('/api/images', uploadRouter)

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

app.listen(port, () => {
  console.log(`Node environment is set to ${process.env.NODE_ENV}`)
  console.log(`Crumple is listening at http://localhost:${port}`)
})

export default app