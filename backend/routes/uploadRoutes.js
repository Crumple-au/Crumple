import express from 'express';
import { isAuth, generateToken } from '../util/util.js';

import fs from 'fs';
import util from 'util';
// const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

import multer from 'multer';
const upload = multer({ dest: 'uploads/' })

import { uploadFile, getFileStream } from '../util/s3.js'

const uploadRouter = express.Router();

uploadRouter.get('/:key', (req, res) => {
  console.log('req', req.params.key)
    const key = req.params.key
    const readStream = getFileStream(key)
    
    console.log('res', res)
    readStream.pipe(res)
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
  res.status(200).json({imagePath: `/images/${result.Key}` })
})

export default uploadRouter;