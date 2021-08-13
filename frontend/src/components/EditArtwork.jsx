import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateArtwork, detailsArtwork } from '../actions/artworkActions'
import {
  ARTWORK_DELETE_RESET,
  ARTWORK_UPDATE_RESET,
} from '../constants/artworkConstants'
import Alert from '../components/Alert'
import Preloader from '../components/Preloader'
import UploadArtworkImage from '../components/UploadArtworkImage'
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

function EditArtwork() {
  const classes = useStyles()

  const { artworkId } = useParams()
  const history = useHistory()

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  // const [image, setImage] = useState('');
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [inStock, setInStock] = useState('')
  const [show, setShow] = useState(false)
  const [artworkImage, setArtworkImage] = useState('')

  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  const artworkDetails = useSelector((state) => state.artworkDetails)
  const { loading, error, artwork } = artworkDetails

  const artworkUpdate = useSelector((state) => state.artworkUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = artworkUpdate

  const dispatch = useDispatch()
  console.log(artwork)
  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(artwork)
    dispatch(
      updateArtwork({
        _id: artwork._id,
        seller: userInfo._id,
        name,
        price,
        inStock,
        category,
        description,
        image: artworkImage,
      })
    )
  }

  useEffect(() => {
    if (successUpdate) {
      history.replace(`/artwork/${artworkId}`)
    }
    if (!artwork || artwork._id !== artworkId || successUpdate) {
      dispatch({ type: ARTWORK_UPDATE_RESET })
      dispatch(detailsArtwork(artworkId))
    } else {
      setName(artwork.name)
      setPrice(artwork.price)
      setArtworkImage(artwork.image)
      setCategory(artwork.category)
      setInStock(artwork.inStock)
      setDescription(artwork.description)
    }
  }, [dispatch, artwork, successUpdate, history, artworkId])

  return userInfo && userInfo._id ? (
    <>
      <Box>
        <Typography align='center' gutterBottom variant='h3'>
          update your <span style={{ color: secondary }}>creation</span>
        </Typography>
        <Typography align='center' gutterBottom color='textSecondary'>
          {' '}
          Keep your description up-to-date and creative.
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={3} md={4} lg={4} xl={4} align='center'></Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} align='center'>
            <Box paddingTop='3rem'>
              <Button variant='contained' onClick={() => setShow(true)}>
                Update Artwork Image
              </Button>
            </Box>
            {show && (
              <UploadArtworkImage
                setArtworkImage={setArtworkImage}
                onClose={() => setShow(false)}
              />
            )}

            <form onSubmit={submitHandler}>
              {artworkImage && (
                <img src={artworkImage} alt='artwork' height='100'></img>
              )}

              {loadingUpdate && <Preloader />}
              {successUpdate && (
                <Alert variant='success'>User Updated Succussfully</Alert>
              )}
              {errorUpdate && <Alert variant='danger'>{errorUpdate}</Alert>}

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
                  <MenuItem value='Design and Tech'>Design and Tech</MenuItem>
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
                <InputLabel htmlFor='countInStock'>Count In Stock</InputLabel>
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
                  Update
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Box>
    </>
  ) : (
    <h1 className='card-title'>
      Sorry but you do not have access to this page :/
    </h1>
  )
}

export default EditArtwork
