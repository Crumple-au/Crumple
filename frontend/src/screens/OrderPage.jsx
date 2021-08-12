import Axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useHistory } from 'react-router-dom'
import { detailsOrder, payOrder } from '../actions/orderActions'
import Preloader from '../components/Preloader'
import Alert from '../components/Alert'
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from '../constants/orderConstants'
import art from '../images/crumple-logo.jpg'
import { Box, Grid, Card, CardContent, Typography } from '@material-ui/core'
import { secondary, primary } from '../utils/theme'

function OrderPage() {
  const { orderId } = useParams()
  const history = useHistory()

  const [sdkReady, setSdkReady] = useState(false)
  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;

  const orderPay = useSelector((state) => state.orderPay)
  const { loading: loadingPay, error: errorPay, success: successPay } = orderPay

  const dispatch = useDispatch()

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await Axios.get('/api/config/paypal')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }

    if (!order || successPay || (order && order._id !== orderId)) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch({ type: ORDER_DELIVER_RESET })
      dispatch(detailsOrder(orderId))
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript()
        } else {
          setSdkReady(true)
        }
      }
    }
  }, [dispatch, orderId, sdkReady, successPay, order])

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order, paymentResult))
    history.push(`/paypal/receipt/${order._id}`)
  }

  return loading ? (
    <Preloader></Preloader>
  ) : error ? (
    <Alert variant='alert alert-danger'>{error}</Alert>
  ) : (
    <>
      <Box margin='2rem 2rem 2rem 2rem'>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={1}></Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Box m='1rem'>
              <Typography gutterBottom variant='h6'>
                Order# <span style={{ color: primary }}>{order._id}</span>
              </Typography>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h4'>
                    shipping
                  </Typography>
                  <Typography>
                    <span style={{ fontWeight: '500' }}>Name:</span>{' '}
                    {order.shippingAddress.fullName}
                  </Typography>
                  <Typography>
                    <span style={{ fontWeight: '500' }}>Address:</span>{' '}
                    {order.shippingAddress.address},{' '}
                    {order.shippingAddress.city},{' '}
                    {order.shippingAddress.postalCode},{' '}
                    {order.shippingAddress.country}
                  </Typography>
                  {order.isDelivered ? (
                    <Alert variant='success'>
                      Delivered at {order.deliveredAt}
                    </Alert>
                  ) : (
                    <Alert variant='danger'>Not Delivered</Alert>
                  )}
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
                    {order.paymentMethod}
                  </Typography>
                  {order.isPaid ? (
                    <Alert variant='alert alert-success'>
                      Paid at {order.paidAt}
                    </Alert>
                  ) : (
                    <Alert variant='alert alert-danger'>Not Paid</Alert>
                  )}
                </CardContent>
              </Card>
            </Box>

            <Box m='1rem'>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant='h4'>
                    order <span style={{ color: secondary }}>items</span>
                  </Typography>

                  {order &&
                    order.orderItems.map((item) => (
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
                            {item.qty} x ${item.price} = $
                            {item.qty * item.price}
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
                      <Typography>${order.itemsPrice.toFixed(2)}</Typography>
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
                          ${order.itemsPrice.toFixed(2)}
                        </span>
                      </Typography>
                    </Box>
                  </div>

                  {!order.isPaid && (
                    <Box paddingTop='1rem'>
                      {!sdkReady ? (
                        <Preloader></Preloader>
                      ) : (
                        <>
                          {errorPay && (
                            <Alert variant='danger'>{errorPay}</Alert>
                          )}
                          {loadingPay && <Preloader></Preloader>}

                          <PayPalButton
                            amount={order.itemsPrice}
                            onSuccess={successPaymentHandler}
                          ></PayPalButton>
                        </>
                      )}
                    </Box>
                  )}
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

export default OrderPage
