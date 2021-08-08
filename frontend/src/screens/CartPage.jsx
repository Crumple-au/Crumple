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
    // delete action
    dispatch(removeFromCart(artworkId))
  }

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping')
  }
  
  useEffect(() => {
    if (artworkId) {
      dispatch(addToCart(artworkId, qty))
    }

    console.log('CartItems: ', cartItems)
  }, [dispatch, artworkId, qty, cartItems])

  return (
    <Box m='4rem 2rem 2rem 2rem'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={1} align='center'></Grid>
        <Grid item xs={12} sm={12} md={8} align='center'>
          <Typography variant='h3'>
            your <span style={{ color: secondary }}>cart</span>
          </Typography>
          {error && <Alert variant='danger'>{error}</Alert>}
          {cartItems.length === 0 ? (
            <Alert>
              Cart is empty. <Link to='/categories'>Go Shopping</Link>
            </Alert>
          ) : (
            <Box>
              {/* { {cartItems.map(item => (
                <Artworks
                  artworks={item}
                  onRemove={() => removeFromCartHandler(item._id)}
                />
               ))} } */}
              <Artworks
                artworks={cartItems}
                onRemove={() => removeFromCartHandler()}
              />
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
