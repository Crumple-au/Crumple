import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import AWS from 'aws-sdk';
import util from 'util';
import fs from 'fs';

import { uploadFile } from '../util/s3.js'
import { isAuth } from '../util/util.js';

const unlinkFile = util.promisify(fs.unlink)
const upload = multer({ dest: 'uploads/' })

dotenv.config()

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new AWS.S3({
  accessKeyId: accessKeyId,
  signatureVersion: 'v4',
  region: region,
  secretAccessKey: secretAccessKey
});

const EXPIRY_TIME = 604800;

const uploadRouter = express.Router();

// GET image from S3 by id
uploadRouter.get(
  '/:key',
  (req, res) => {
    try {
      const key = req.params.key
      const url = s3.getSignedUrl('getObject', {
          Bucket: bucketName,
          Key: key,
          Expires: EXPIRY_TIME
      })
      console.log('URL: ', url)
      res.status(200).send(url)
    } catch(error) {
      res.status(400).send({message: error})
    }
})

// POST image to S3 bucket
uploadRouter.post(
  '/',
  isAuth,
  upload.single('image'), async (req, res) => {
    try {
      const file = req.file
      const result = await uploadFile(file)
      await unlinkFile(file.path)
      res.status(200).send(result.Key)

    } catch(error) {
      res.status(400).send({message: error})
    }
})

export default uploadRouter;