import React, { useState } from 'react'
import {
  Box,
  Grid,
  Typography,
  Button,
  InputLabel,
  OutlinedInput,
  Card,
  CardContent,
} from '@material-ui/core'

import { secondary } from '../utils/theme'

function Payments() {
  const [fullName, setFullName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')
  const [phone, setPhone] = useState('')
  const [bankAccName, setBankAccName] = useState('')
  const [bankAccBSB, setBankAccBSB] = useState('')
  const [bankAccNum, setBankAccNum] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <Box>
      <Typography align='center' gutterBottom variant='h3'>
        get <span style={{ color: secondary }}>paid</span>
      </Typography>
      <Typography align='center' gutterBottom color='textSecondary'>
        {' '}
        Turn things on by saving your personal information and bank details.
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={3} md={4} lg={4} xl={4} align='center'></Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3} align='center'>
          <form onSubmit={submitHandler}>
            <Box
              display='flex'
              justifyContent='space-between'
              paddingTop='3rem'
            >
              <Box>
                <Typography gutterBottom>Personal Information</Typography>
              </Box>
            </Box>
            <Box display='flex' justifyContent='space-between'>
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

            <Box
              display='flex'
              justifyContent='space-between'
              paddingTop='2rem'
            >
              <InputLabel htmlFor='phone'>Phone Number</InputLabel>
            </Box>
            <OutlinedInput
              type='text'
              name='phone'
              id='phone'
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              variant='outlined'
              margin='dense'
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />

            {/* Bank details section */}
            <Box
              display='flex'
              justifyContent='space-between'
              paddingTop='2rem'
            >
              <Box>
                <Typography gutterBottom>Bank Details</Typography>
              </Box>
            </Box>

            <Card>
              <CardContent>
                <Typography>Account Name: Ryan</Typography>
                <Typography>BSB: 123-456</Typography>
                <Typography>Account Number: 000 137 634</Typography>
              </CardContent>
            </Card>

            <Box marginTop='0.5rem'>
              <Typography variant='body2' align='left' color='textSecondary'>
                Complete the form to update your saved bank details.
              </Typography>
            </Box>
            <Box
              display='flex'
              justifyContent='space-between'
              paddingTop='2rem'
            >
              <InputLabel htmlFor='bankAccName'>Account Name</InputLabel>
            </Box>
            <OutlinedInput
              type='text'
              id='bankAccName'
              name='bankAccName'
              value={bankAccName}
              onChange={(e) => setBankAccName(e.target.value)}
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
                  <InputLabel htmlFor='bankAccBSB'>BSB</InputLabel>
                </Box>
                <OutlinedInput
                  type='text'
                  id='bankAccBSB'
                  name='bankAccBSB'
                  value={bankAccBSB}
                  onChange={(e) => setBankAccBSB(e.target.value)}
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
                  <InputLabel htmlFor='bankAccNum'>Account Number</InputLabel>
                </Box>
                <OutlinedInput
                  type='text'
                  id='bankAccNum'
                  name='bankAccNum'
                  value={bankAccNum}
                  onChange={(e) => setBankAccNum(e.target.value)}
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

            <Box paddingTop='1rem' display='flex' justifyContent='center'>
              <Button type='submit' variant='contained' color='primary'>
                Update
              </Button>
            </Box>
          </form>
        </Grid>
        <Grid item xs={12} sm={3} md={4} lg={4} xl={4} align='center'></Grid>
      </Grid>
    </Box>
  )
}

export default Payments
