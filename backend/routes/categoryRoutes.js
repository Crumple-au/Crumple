import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import seed from '../util/seed.js'
import Category from '../models/categoryModel.js'

const categoryRouter = express.Router()

// seed categories db
categoryRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    const createdCategories = await Category.insertMany(seed.categories)
    res.send({ createdCategories })
  })
)

// get all categories
categoryRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const categories = await Category.find({})
    res.send(categories)
  })
)

// get individual category
categoryRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id)
    if (category) {
      res.send({
        _id: category._id,
        name: category.name,
        altName: category.altName,
        description: category.description,
        image: category.image,
      })
    } else {
      res.status(404).send({ message: 'Category Not Found' })
    }
  })
)

export default categoryRouter
