import React, { useState } from 'react'
import '../style/order.scss'
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../actions/cartActions'
import StepsUI from '../components/StepsUI'
import {
  Box,
  Grid,
  Typography,
  RadioGroup,
  FormControlLabel,
  Button,
  Radio,
} from '@material-ui/core'

import { secondary } from '../utils/theme'

const shippingSteps = {
  text1: 'Signin',
  text2: 'Shipping',
  text3: 'Payment',
  text4: 'Place Order',
}

function PaymentPage(props) {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  if (!shippingAddress.address) {
    props.history.push('/shipping')
  }
  const dispatch = useDispatch()

  const [paymentMethod, setPaymentMethod] = useState('Paypal')
  console.log(paymentMethod)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    props.history.push('/placeorder')
  }
  return (
    <>
      <StepsUI step1 step2 step3 text={shippingSteps}></StepsUI>

      <Box m='2rem 2rem 2rem 2rem'>
        <Grid container>
          <Grid item xs={12} sm={3} md={4} lg={4} xl={4} align='center'></Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} align='center'>
            <Typography gutterBottom variant='h3'>
              check<span style={{ color: secondary }}>out</span>
            </Typography>
            <form onSubmit={submitHandler}>
              <Typography gutterBottom variant='h6'>
                {' '}
                Payment Method
              </Typography>
              <Box display='flex' justifyContent='center' marginTop='2rem'>
                <RadioGroup value={paymentMethod}>
                  <FormControlLabel
                    id='paypal'
                    value='Paypal'
                    name='paymentMethod'
                    control={<Radio />}
                    label='Paypal'
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <FormControlLabel
                    id='stripe'
                    value='Stripe'
                    name='paymentMethod'
                    control={<Radio />}
                    label='Stripe'
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                </RadioGroup>
              </Box>
              <Box paddingTop='1rem' display='flex' justifyContent='center'>
                <Button type='submit' variant='contained' color='primary'>
                  Continue
                </Button>
              </Box>
            </form>
          </Grid>
          <Grid item xs={12} sm={3} md={4} lg={4} xl={4} align='center'></Grid>
        </Grid>
      </Box>
    </>
  )
}

export default PaymentPage
