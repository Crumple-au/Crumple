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

export default artworkRouter;