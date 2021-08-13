import React, { useEffect } from 'react'
import '../style/order.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../actions/cartActions'
import Alert from '../components/Alert'
import Artworks from '../components/Artworks'
import {
  Button,
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
} from '@material-ui/core'
import { secondary } from '../utils/theme'

function CartPage(props) {
  const { artworkId } = useParams()
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1

  const cart = useSelector((state) => state.cart)
  const { cartItems, error } = cart

  const dispatch = useDispatch()

  const removeFromCartHandler = (artworkId) => {
    dispatch(removeFromCart(artworkId))
  }

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping')
  }

  useEffect(() => {
    if (artworkId) {
      dispatch(addToCart(artworkId, qty))
    }
  }, [dispatch, artworkId, qty, cartItems])

  return (
    <Box m='4rem 2rem 2rem 2rem'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={1} align='center'></Grid>
        <Grid item xs={12} sm={12} md={8} align='center'>
          <Typography gutterBottom variant='h3'>
            your <span style={{ color: secondary }}>cart</span>
          </Typography>
          {error && <Alert variant='danger'>{error}</Alert>}
          {cartItems.length === 0 ? (
            <Alert>
              <Typography>
                Cart is empty.{' '}
                <Link to='/categories' className='link'>
                  Go Shopping
                </Link>
              </Typography>
            </Alert>
          ) : (
            <Box>
              <Grid
                container
                spacing={0}
                justifyContent='center'
                alignItems='center'
              >
                {cartItems.map((item) => (
                  <Grid key={item._id} item xs={12} sm={4} md={4} lg={4} xl={3}>
                    <Artworks
                      key={item._id}
                      height="400px"
                      artwork={item}
                      onRemove={() => removeFromCartHandler(item._id)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={2} align='center'>
          <Card>
            <CardContent>
              <Typography
                gutterBottom
                variant='body1'
                style={{ fontWeight: '500' }}
              >
                Subtotal (
                {cartItems.reduce((acc, artwork) => acc + artwork.qty, 0)}{' '}
                items) : $
                {cartItems.reduce(
                  (acc, artwork) => acc + artwork.price * artwork.qty,
                  0
                )}
              </Typography>
              <Box pt='1.5rem'>
                <Button
                  variant='contained'
                  color='primary'
                  type='button'
                  onClick={checkoutHandler}
                  disabled={cartItems.length === 0}
                >
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={1} align='center'></Grid>
      </Grid>
    </Box>
  )
}

export default CartPage
