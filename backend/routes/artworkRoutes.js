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
        const artworks = await Artwork.find({
            ...sellerFilter,
        })
        .populate('seller', 'seller.name');
        res.send({ artworks });
    })
);


// artworkRouter.get(
//     '/:id',
//     expressAsyncHandler(async (req, res) => {
//         console.log(req.params.id)
//         const artwork = await Artwork.findById(req.params.id).populate(
//             'seller',
//             'seller.name'
//         );
//         if (artwork) {
//             res.send(artwork);
//         } else {
//             res.status(404).send({ message: 'Artwork Not Found' });
//         }
//     })
// );

export default artworkRouter;