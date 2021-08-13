import React, { useState, useEffect } from 'react'
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
import {
  deleteArtwork,
  detailsArtwork,
  createReview,
} from '../actions/artworkActions'
import {
  ARTWORK_REVIEW_CREATE_RESET,
  ARTWORK_DELETE_RESET,
} from '../constants/artworkConstants'
import { addToCart } from '../actions/cartActions'
import Alert from './Alert'
import Preloader from './Preloader'
import '../style/index.scss'

const ArtworkDetails = (props) => {
  const { id } = useParams()
  const history = useHistory()

  const [comment, setComment] = useState('')

  const artworkDetails = useSelector((state) => state.artworkDetails)
  const { loading, error, artwork } = artworkDetails

  const artworkDelete = useSelector((state) => state.artworkDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = artworkDelete

  const artworkReviewCreate = useSelector((state) => state.artworkReviewCreate)
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = artworkReviewCreate

  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  const dispatch = useDispatch()

  const deleteHandler = (artwork) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteArtwork(artwork._id))
    }
  }

  const submitReviewHandler = (e) => {
    e.preventDefault()

    if (comment) {
      dispatch(createReview(id, { comment, name: userInfo.name }))
    } else {
      alert('Please enter comment')
    }
  }

  const addToCartHandler = (artworkId) => {
    dispatch(addToCart(artworkId))
  }

  useEffect(() => {
    if (successDelete) {
      dispatch({ type: ARTWORK_DELETE_RESET })
    }
    if (successReviewCreate) {
      setComment('')
      dispatch({ type: ARTWORK_REVIEW_CREATE_RESET })
    }
    if (!artwork || id !== artwork._id) {
      dispatch(detailsArtwork(id))
    }
  }, [dispatch, artwork, id, successDelete, history, successReviewCreate])

  return (
    <>
      {loading && <Preloader></Preloader>}
      {error && <Alert variant='alert alert-danger'>{error}</Alert>}
      {successDelete && (
        <Alert variant='alert alert-success'>
          <h3 className='row center'>{successDelete.message}</h3>
        </Alert>
      )}
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
                  <Box>
                    <Button
                      component={Link}
                      style={{ margin: '1rem' }}
                      variant='contained'
                      onClick={() => history.goBack()}
                    >
                      Back
                    </Button>

                    {userInfo._id === artwork.seller._id && (
                      <>
                        <Button
                          variant='contained'
                          color='secondary'
                          style={{ margin: '1rem' }}
                          onClick={() => deleteHandler(artwork)}
                        >
                          Delete
                        </Button>

                        <Button
                          variant='contained'
                          component={Link}
                          style={{ margin: '1rem' }}
                          to={`/profile/${artwork.seller._id}/edit/${artwork._id}`}
                        >
                          Edit
                        </Button>
                      </>
                    )}
                  </Box>
                </Card>
              </Grid>

              <Grid item xs={12} sm={12} md={2} align='center'></Grid>
            </Grid>
          </Box>
        </>
      )}
      <div className='card card-body'>
        <h1 className='card-title'>Reviews</h1>
        {artwork && artwork.reviews.length === 0 && (
          <Alert>There is no reviews</Alert>
        )}
        <ul>
          <li>
            {userInfo ? (
              <form className='card-body' onSubmit={submitReviewHandler}>
                <div>
                  <label className='card-title' htmlFor='comment'>
                    Write a <span>review!</span>
                  </label>
                  <textarea
                    id='comment'
                    value={comment}
                    maxLength='2000'
                    required
                    style={{ resize: 'none', width: '100%', height: '10rem' }}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>

                <div>
                  <label />
                  <button className='primary' type='submit'>
                    Submit
                  </button>
                </div>

                <hr></hr>

                <div>
                  {loadingReviewCreate && <Preloader></Preloader>}
                  {errorReviewCreate && (
                    <Alert variant='alert alert-danger'>
                      {errorReviewCreate}
                    </Alert>
                  )}
                </div>
              </form>
            ) : (
              <Alert variant='alert alert-danger'>
                Please <Link to='/signin'>Sign In</Link> to write a review.
              </Alert>
            )}
          </li>

          {artwork &&
            artwork.reviews.map((review) => (
              <li key={review._id}>
                <strong>{review.name}</strong>
                <p>{review.createdAt.substring(0, 10)}</p>
                <p>{review.comment}</p>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default ArtworkDetails
