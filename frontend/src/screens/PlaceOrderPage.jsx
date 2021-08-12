import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'
import StepsUI from '../components/StepsUI'
import Preloader from '../components/Preloader'
import Alert from '../components/Alert'
import art from '../images/crumple-logo.jpg'
import {
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core'
import { secondary } from '../utils/theme'

const shippingSteps = {
  text1: 'Signin',
  text2: 'Shipping',
  text3: 'Payment',
  text4: 'Place Order',
}

function PlaceOrderPage() {
  const history = useHistory()

  const cart = useSelector((state) => state.cart)
  if (!cart.paymentMethod) {
    history.push('/payment')
  }

  const orderCreate = useSelector((state) => state.orderCreate)
  const { loading, success, error, order } = orderCreate

  const toPrice = (num) => Number(num.toFixed(2))

  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  )
  // cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice)
  cart.totalPrice = cart.itemsPrice + cart.taxPrice

  const dispatch = useDispatch()

  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }))
  }

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`)
      dispatch({ type: ORDER_CREATE_RESET })
    }
  }, [dispatch, order, history, success])

  return (
    <>
      <StepsUI step1 step2 step3 step4 text={shippingSteps}></StepsUI>
      <Box margin='2rem 2rem 2rem 2rem'>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={1}></Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Box m='1rem'>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h4'>
                    shipping
                  </Typography>
                  <Typography>
                    <span style={{ fontWeight: '500' }}>Name:</span>{' '}
                    {cart.shippingAddress.fullName}
                  </Typography>
                  <Typography>
                    <span style={{ fontWeight: '500' }}>Address:</span>{' '}
                    {cart.shippingAddress.address}, {cart.shippingAddress.city},{' '}
                    {cart.shippingAddress.postalCode},{' '}
                    {cart.shippingAddress.country}
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            <Box m='1rem'>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h4'>
                    payment
                  </Typography>
                  <Typography>
                    <span style={{ fontWeight: '500' }}>Method:</span>{' '}
                    {cart.paymentMethod}
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            <Box m='1rem'>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h4'>
                    order <span style={{ color: secondary }}>items</span>
                  </Typography>

                  {cart.cartItems.map((item) => (
                    <Box
                      display='flex'
                      justifyContent='space-between'
                      alignItems='center'
                      key={item.product}
                    >
                      <Box m='0.2rem'>
                        <img
                          src={item.image || art}
                          alt={item.name}
                          width='130px'
                          height='130px'
                        />
                      </Box>
                      <Box m='0.5rem'>
                        <Typography>
                          <Link
                            className='link'
                            to={`/product/${item.product}`}
                          >
                            {item.name}
                          </Link>
                        </Typography>
                      </Box>
                      <Box>
                        <Typography>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Box m='1rem'>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h4'>
                    order <span style={{ color: secondary }}>summary</span>
                  </Typography>
                  <div className='row'>
                    <Box>
                      <Typography>Items</Typography>
                    </Box>
                    <Box>
                      <Typography>${cart.itemsPrice.toFixed(2)}</Typography>
                    </Box>
                  </div>
                  <div className='row'>
                    <Box>
                      <Typography>Tax</Typography>
                    </Box>
                    <Box>
                      <Typography>${cart.taxPrice.toFixed(2)}</Typography>
                    </Box>
                  </div>
                  <div className='row'>
                    <Box>
                      <Typography>
                        <span style={{ fontWeight: '500' }}>Order Total</span>
                      </Typography>
                    </Box>
                    <Box paddingTop='1rem'>
                      <Typography>
                        <span style={{ fontWeight: '500' }}>
                          ${cart.totalPrice.toFixed(2)}
                        </span>
                      </Typography>
                    </Box>
                  </div>
                  <Box paddingTop='1rem'>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={placeOrderHandler}
                      style={{ width: '100%' }}
                      disabled={cart.cartItems.length === 0}
                    >
                      Place Order
                    </Button>
                  </Box>
                  {loading && <Preloader></Preloader>}
                  {error && <Alert variant='danger'>{error}</Alert>}
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid it em xs={12} sm={12} md={1} align='center'></Grid>
        </Grid>
      </Box>
    </>
  )
}

export default PlaceOrderPage
