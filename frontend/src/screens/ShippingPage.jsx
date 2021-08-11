import React, { useState } from 'react'
import '../style/order.scss'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions'
import StepsUI from '../components/StepsUI'
import {
  Box,
  Grid,
  Typography,
  Button,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core'

import { secondary } from '../utils/theme'

const shippingSteps = {
  text1: 'Sign In',
  text2: 'Shipping',
  text3: 'Payment',
  text4: 'Place Order',
}

function ShippingPage(props) {
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  if (!userInfo) {
    props.history.push('/signin')
  }
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  const dispatch = useDispatch()

  const [fullName, setFullName] = useState(shippingAddress.fullName)
  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(
      saveShippingAddress({
        fullName,
        address,
        city,
        postalCode,
        country,
      })
    )

    props.history.push('/payment')
  }

  return (
    <>
      <StepsUI step1 step2 text={shippingSteps}></StepsUI>

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
                Shipping Address
              </Typography>

              <Box
                display='flex'
                justifyContent='space-between'
                paddingTop='1rem'
              >
                <InputLabel htmlFor='fullName'>Full Name</InputLabel>
              </Box>
              <OutlinedInput
                type='text'
                name='fullName'
                id='fullName'
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                paddingTop='2rem'
              >
                <InputLabel htmlFor='address'>Street Address</InputLabel>
              </Box>
              <OutlinedInput
                type='text'
                id='address'
                name='address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                variant='outlined'
                margin='dense'
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Box display='flex'>
                <Box>
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    paddingTop='0.5rem'
                  >
                    <InputLabel htmlFor='city'>City</InputLabel>
                  </Box>
                  <OutlinedInput
                    type='text'
                    id='city'
                    name='city'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    variant='outlined'
                    margin='dense'
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
                <Box>
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    paddingTop='0.5rem'
                  >
                    <InputLabel htmlFor='postalCode'>Post Code</InputLabel>
                  </Box>
                  <OutlinedInput
                    type='text'
                    id='postalCode'
                    name='postalCode'
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    required
                    variant='outlined'
                    margin='dense'
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
              </Box>
              <Box
                display='flex'
                justifyContent='space-between'
                paddingTop='0.5rem'
              >
                <InputLabel htmlFor='country'>Country</InputLabel>
              </Box>
              <OutlinedInput
                type='text'
                id='country'
                name='country'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                variant='outlined'
                margin='dense'
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
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

export default ShippingPage
