import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js'
import artworkRouter from './routes/artworkRoutes.js'
import cors from 'cors'
import mongodb_database from './config.js'
import categoryRouter from './routes/categoryRoutes.js'

dotenv.config()

const app = express()

app.use(cors({ origin: '*' }))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGODB_URL || mongodb_database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.status(200).send('Hello from Express!')
})

app.use('/api/users', userRouter)
app.use('/api/artworks', artworkRouter)
app.use('/api/categories', categoryRouter)

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

app.listen(port, () => {
  console.log(`Node environment is set to ${process.env.NODE_ENV}`)
  console.log(`Crumple is listening at http://localhost:${port}`)
})

// module.exports = {
//   app
// }
export default app