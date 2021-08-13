import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import seed from '../util/seed.js';
import Artwork from '../models/artworkModel.js';
import User from '../models/userModel.js';
import mongoose from 'mongoose';
import {generateToken, isAuth, isAdmin} from '../util/util.js';

const artworkRouter = express.Router();

// CREATE artwork data samples
artworkRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
    const seller = await User.findOne({isSeller: true});
    if (seller) {
        const artworks = seed.artworks.map((artwork) => ({
        ...artwork,
        seller: seller._id,
        }));
        const createdArtworks = await Artwork.insertMany(artworks);
        res.send({ createdArtworks });
    } else {
        res
        .status(500)
        .send({ message: 'No seller found. first run /api/users/seed' });
    }
    })
);

// Get all artworks corresponding to query
artworkRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
        const seller = req.query.seller || '';
        const category = req.query.category || '';
        const order = req.query.order || '';
        const price = req.query.price || '';

        const sellerFilter = seller ? { seller } : {};
        const categoryFilter = category ? { category } : {};

        const sortOrder = 
        order === 'oldest' 
        ? {createdAt: 1}
        : order === 'newest'
        ? {createdAt: -1}
        : {_id: -1};
    
        const populateQuery = { path:'seller', select: ['name', 'email', 'image'] };
        const count = await Artwork.countDocuments({
            ...sellerFilter,
            ...categoryFilter,
        })
        const artworks = await Artwork.find({
            ...sellerFilter,
            ...categoryFilter,
        })
        .populate(populateQuery)
        .sort(sortOrder)
        res.status(200).send({ artworks, count });
    })
);

// CREATE artwork
artworkRouter.post(
    '/',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        try {
            const artwork = new Artwork({
                name: req.body.artwork.name,
                seller: req.user._id,
                image: req.body.artwork.image,
                price: req.body.artwork.price,
                category: req.body.artwork.category,
                description: req.body.artwork.description,
                inStock: req.body.artwork.inStock
            });
            const createdArtwork = await artwork.save();
            res.status(200).send({message: 'Artwork Created!', artwork: createdArtwork});
        } catch(error) {
            res.status(500).send({error: error})
        }
    })
);

// GET artwork by id
artworkRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const populateQuery = { path:'seller', select: ['name', 'image'] };
        try{
            const artwork = await Artwork.findById(req.params.id).populate(populateQuery);
            if (artwork) {
                res.status(200).send(artwork);
            }
        } catch(error) {
            res.status(404).send({ message: 'Artwork Not Found' });
        }
    })
);

// Update artwork by id
artworkRouter.put(
    '/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        try {
            const artwork = await Artwork.findById(req.params.id);

            artwork.name = req.body.name;
            artwork.price = req.body.price;
            artwork.image = req.body.image;
            artwork.category = req.body.category;
            artwork.inStock = req.body.inStock;
            artwork.description = req.body.description;

            const updatedArtwork = await artwork.save();
            res.send({ message: 'Artwork Updated', artwork: updatedArtwork });

        } catch(e) {
            res.status(404).send({ error: 'Artwork Not Found' });
        }
    })
);

// DELETE artwork by id
artworkRouter.delete(
    '/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const artwork = await Artwork.findById(req.params.id);
        if (artwork) {
            const deleteArtwork = await artwork.remove();
            res.status(200).send({ message: 'Artwork Deleted', artwork: deleteArtwork });
        } else {
            res.status(404).send({ message: 'Artwork Not Found' });
        }
    })
);

// CREATE artowrk review
artworkRouter.post(
    '/:id/reviews',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const artworkId = req.params.id;
      const artwork = await Artwork.findById(artworkId);
      if (artwork) {
        if (artwork.reviews.find((x) => x.name === req.user.name)) {
            return res.status(400).send({ message: 'You already submitted a review' });
        }

        const review = {
            name: req.user.name,
            comment: req.body.comment,
        };
        artwork.reviews.push(review);
        const updatedArtwork = await artwork.save();
        res.status(201).send({
          message: 'Review Created',
          review: updatedArtwork.reviews[updatedArtwork.reviews.length - 1],
        });
      } else {
            res.status(404).send({ message: 'Artwork Not Found' });
      }
    })
);

export default artworkRouter;