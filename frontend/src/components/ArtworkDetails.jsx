import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core'
import { useParams } from 'react-router-dom'
// import { useFetch } from '../utils/helpers'
import art from '../images/crumple-artwork.jpg'
import { deleteArtwork, detailsArtwork } from '../actions/artworkActions'
// import { ARTWORK_CREATE_RESET, ARTWORK_DELETE_RESET, } from '../constants/artworkConstants';
import { addToCart } from '../actions/cartActions'
import Alert from './Alert'
import Preloader from './Preloader'

const ArtworkDetails = (props) => {
  const { id } = useParams()
  // const { element } = useFetch(`/api/artworks/${id}`)
  const history = useHistory()

  // const cart = useSelector((state) => state.cart);
  // const { cartItems, error } = cart;

  const artworkDetails = useSelector((state) => state.artworkDetails)
  const { loading, error, artwork } = artworkDetails
  const artworkDelete = useSelector((state) => state.artworkDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = artworkDelete

  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  const dispatch = useDispatch()

  const deleteHandler = (artwork) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteArtwork(artwork._id))
    }
  }

  const addToCartHandler = (artworkId) => {
    dispatch(addToCart(artworkId))
  }

  useEffect(() => {
    if (successDelete) {
      history.push(`/profile/${userInfo._id}`)
    }
    if (artwork === undefined) {
      dispatch(detailsArtwork(id))
    }
  }, [dispatch, artwork, id, successDelete])

  return (
    <>
      {loading && <Preloader></Preloader>}
      {error && <Alert variant='alert alert-danger'>{error}</Alert>}

      {loadingDelete && <Preloader></Preloader>}
      {errorDelete && <Alert variant='alert alert-danger'>{errorDelete}</Alert>}
      {artwork && (
        <>
          <Box m='4rem 2rem 2rem 2rem'>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={2} align='center'></Grid>
              <Grid item xs={12} sm={12} md={4} align='center'>
                <Card>
                  <CardMedia>
                    <img
                      src={artwork.image || art}
                      alt={artwork.name}
                      height='100%'
                      width='100%'
                      style={{ objectFit: 'cover' }}
                    />
                  </CardMedia>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={4} align='center'>
                <Card>
                  <CardContent>
                    <Box
                      display='flex'
                      justifyContent='space-between'
                      style={{ margin: '1rem' }}
                    >
                      <Button variant='outlined'>$ {artwork.price}</Button>
                      <Button
                        component={Link}
                        onClick={() => addToCartHandler(artwork._id)}
                        variant='contained'
                        color='primary'
                      >
                        Add to cart
                      </Button>
                    </Box>
                    <Typography gutterBottom align='center' variant='h5'>
                      {artwork.name}
                    </Typography>
                    <Typography gutterBottom color='textSecondary'>
                      {artwork.seller.name}
                    </Typography>
                    <Typography align='center' color='textSecondary'>
                      {artwork.description}
                    </Typography>
                  </CardContent>
                  <Button
                    style={{ margin: '1rem' }}
                    variant='contained'
                    onClick={() => history.goBack()}
                  >
                    Back
                  </Button>
                  {userInfo._id === artwork.seller._id && (
                    <Button onClick={() => deleteHandler(artwork)}>
                      Delete Artwork
                    </Button>
                  )}
                </Card>
              </Grid>

              <Grid item xs={12} sm={12} md={2} align='center'></Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  )
}

export default ArtworkDetails
