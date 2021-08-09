import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import seed from '../util/seed.js';
import Artwork from '../models/artworkModel.js';
import User from '../models/userModel.js';
import mongoose from 'mongoose';
import {generateToken, isAuth, isAdmin} from '../util/util.js';

const artworkRouter = express.Router();

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

artworkRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
        const seller = req.query.seller || '';
        const sellerFilter = seller ? { seller } : {};
        const populateQuery = { path:'seller', select: ['name', 'email', 'image'] };
        const artworks = await Artwork.find({
            ...sellerFilter,
        })
        .populate(populateQuery);
        res.status(200).send({ artworks });
    })
);

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

artworkRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const populateQuery = { path:'seller', select: ['name', 'image'] };
        const artwork = await Artwork.findById(req.params.id).populate(populateQuery);
        if (artwork) {
            res.status(200).send(artwork);
        } else {
            res.status(404).send({ message: 'Artwork Not Found' });
        }
    })
);

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
            artwork.brand = req.body.brand;
            artwork.countInStock = req.body.countInStock;
            artwork.description = req.body.description;

            const updatedArtwork = await artwork.save();
            res.send({ message: 'Artwork Updated', artwork: updatedArtwork });

        } catch(e) {
            res.status(404).send({ error: 'Artwork Not Found' });
        }
    })
);

artworkRouter.delete(
    '/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const artwork = await Artwork.findById(req.params.id);
        if (artwork) {
            const deleteArtwork = await artwork.remove();
            res.send({ message: 'Artwork Deleted', artwork: deleteArtwork });
        } else {
            res.status(404).send({ message: 'Artwork Not Found' });
        }
    })
);

export default artworkRouter;