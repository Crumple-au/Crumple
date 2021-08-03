import express from 'express';
import { isAuth } from '../util/util.js';

import fs from 'fs';
import util from 'util';
// const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

import multer from 'multer';
const upload = multer({ dest: 'uploads/' })

import { uploadFile, getFileStream } from '../util/s3.js'

const uploadRouter = express.Router();

uploadRouter.get('/:key', (req, res) => {
    console.log(req.params)
    const key = req.params.key
    const readStream = getFileStream(key)

    readStream.pipe(res)
})

uploadRouter.post('/', isAuth, upload.single('image'), async (req, res) => {
    const file = req.file
    console.log(file)

  // apply filter
  // resize 

    const result = await uploadFile(file)
    await unlinkFile(file.path)
    console.log(result)
    const description = req.body.description
    res.send({imagePath: `/images/${result.Key}`})
})

export default uploadRouter;