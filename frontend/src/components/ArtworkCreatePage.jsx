import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { createArtwork } from '../actions/artworkActions'
import { ARTWORK_CREATE_RESET } from '../constants/artworkConstants'
import Preloader from './Preloader'
import Alert from './Alert'
import UploadArtworkImage from './UploadArtworkImage'
import {
  Box,
  Grid,
  Typography,
  Button,
  InputLabel,
  OutlinedInput,
  TextField,
  MenuItem,
} from '@material-ui/core'

import '../style/profile.scss'
import { secondary } from '../utils/theme'
import { useStyles } from '../utils/theme'

function ArtworkCreatePage(props) {
  const classes = useStyles()

  const { userId } = useParams()
  const history = useHistory()

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  // const [image, setImage] = useState('');
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [inStock, setInStock] = useState('')
  const [show, setShow] = useState(false)
  const [artworkImage, setArtworkImage] = useState('')

  const artworkCreate = useSelector((state) => state.artworkCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    artwork: createdArtwork,
  } = artworkCreate

  const dispatch = useDispatch()

  const createHandler = (e) => {
    e.preventDefault()
    // TODO: dispatch update product
    dispatch(
      createArtwork({
        seller: userId,
        name,
        price,
        image: artworkImage,
        category,
        description,
        inStock,
      })
    )
  }

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: ARTWORK_CREATE_RESET })
      // props.history.push(`/profile/${userId}`);
      history.replace(`/profile/${userId}`)
    }
    if (createdArtwork) {
      setName(createdArtwork.name)
      setPrice(createdArtwork.price)
      setCategory(createdArtwork.category)
      setDescription(createdArtwork.description)
      setInStock(createdArtwork.inStock)
    }
  }, [dispatch, createdArtwork, successCreate, artworkImage, history, userId])

  return (
    <>
      <Box>
        <Typography align='center' gutterBottom variant='h3'>
          what are you <span style={{ color: secondary }}>creating</span>?
        </Typography>
        <Typography align='center' gutterBottom color='textSecondary'>
          {' '}
          Fill in the boxes and go live in minutes.
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={3} md={4} lg={4} xl={4} align='center'></Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} align='center'>
            <Box paddingTop='3rem'>
              <Button variant='contained' onClick={() => setShow(true)}>
                Upload Artwork Image
              </Button>
            </Box>
            {show && (
              <UploadArtworkImage
                setArtworkImage={setArtworkImage}
                onClose={() => setShow(false)}
              />
            )}

            <form onSubmit={createHandler}>
              {loadingCreate ? (
                <Preloader />
              ) : errorCreate ? (
                <Alert variant='alert alert-danger'>{errorCreate}</Alert>
              ) : (
                <div className='form-fields'>
                  {artworkImage && (
                    <img src={artworkImage} alt='artwork' height='100'></img>
                  )}

                  <Box
                    display='flex'
                    justifyContent='space-between'
                    paddingTop='2rem'
                  ></Box>
                  <Box display='flex' justifyContent='space-between'>
                    <InputLabel htmlFor='name'>Artwork Name</InputLabel>
                  </Box>
                  <OutlinedInput
                    id='name'
                    type='text'
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    variant='outlined'
                    margin='dense'
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <Box>
                    <Box
                      display='flex'
                      justifyContent='space-between'
                      paddingTop='0.5rem'
                    >
                      <InputLabel htmlFor='price'>Price</InputLabel>
                    </Box>
                    <OutlinedInput
                      id='price'
                      type='number'
                      value={price}
                      required
                      onChange={(e) => setPrice(e.target.value)}
                      variant='outlined'
                      margin='dense'
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>
                  <Box>
                    <Box display='flex' justifyContent='space-between'></Box>

                    <TextField
                      variant='filled'
                      size='small'
                      label='CATEGORY'
                      role='dropdown'
                      id='category'
                      select
                      defaultValue=''
                      className={classes.sortFormControl}
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <MenuItem value='Drawing and Painting'>
                        Drawing and Painting
                      </MenuItem>
                      <MenuItem value='Design and Tech'>
                        Design and Tech
                      </MenuItem>
                      <MenuItem value='Books and Writing'>
                        Books and Writing
                      </MenuItem>
                      <MenuItem value='Photography'>Photography</MenuItem>
                      <MenuItem value='Film and Video'>Film and Video</MenuItem>
                      <MenuItem value='Music and Sound Design'>
                        Music and Sound Design
                      </MenuItem>
                      <MenuItem value='Crafts and DIY'>Crafts and DIY</MenuItem>
                    </TextField>
                  </Box>
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    paddingTop='1rem'
                  >
                    <InputLabel htmlFor='countInStock'>
                      Count In Stock
                    </InputLabel>
                  </Box>
                  <OutlinedInput
                    id='countInStock'
                    type='number'
                    value={inStock}
                    required
                    onChange={(e) => setInStock(e.target.value)}
                    variant='outlined'
                    margin='dense'
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    paddingTop='0.5rem'
                  >
                    <InputLabel htmlFor='description'>Description</InputLabel>
                  </Box>
                  <OutlinedInput
                    id='description'
                    multiline
                    rows={4}
                    rowsMax={4}
                    type='text'
                    value={description}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    variant='outlined'
                    margin='dense'
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <Box paddingTop='1rem' display='flex' justifyContent='center'>
                    <Button type='submit' variant='contained' color='primary'>
                      Create
                    </Button>
                  </Box>
                </div>
              )}
            </form>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ArtworkCreatePage
