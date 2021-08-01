import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import seed from '../util/seed.js'
import Category from '../models/categoryModel.js'

const categoryRouter = express.Router()

// get all categories
categoryRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const categories = await Category.find({})
    res.send(categories)
  })
)

// seed categories db
categoryRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    const createdCategories = await Category.insertMany(seed.categories)
    res.send({ createdCategories })
  })
)

export default categoryRouter
