import express from 'express';
import { isAuth, generateToken } from '../util/util.js';
// const AWS = require('aws-sdk')
import AWS from 'aws-sdk';

import fs from 'fs';
import util from 'util';
// const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
import dotenv from 'dotenv';

import multer from 'multer';
const upload = multer({ dest: 'uploads/' })

import { uploadFile, getFileStream } from '../util/s3.js'

dotenv.config()

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const signedUrlExpireSeconds = 60 * 1;

const s3 = new AWS.S3({
  accessKeyId: accessKeyId,
  signatureVersion: 'v4',
  region: region,
  secretAccessKey: secretAccessKey
});

const uploadRouter = express.Router();

uploadRouter.get(
  '/:key',
  (req, res) => {
    const key = req.params.key
    const url = s3.getSignedUrl('getObject', {
        Bucket: bucketName,
        Key: key
    })
    // console.log('URL: ', url)
    res.status(200).send(url)
})

uploadRouter.post(
  '/',
  isAuth,
  upload.single('image'), async (req, res) => {
  const file = req.file
  // apply filter
  // resize 
  
  const result = await uploadFile(file)
  await unlinkFile(file.path)
  // console.log('RESULT.KEY: ', result.Key)
  res.status(200).send(result.Key)
})

export default uploadRouter;