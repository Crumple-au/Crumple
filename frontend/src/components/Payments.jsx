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
        Turn things on by saving your bank details.
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={3} md={4} lg={4} xl={4} align='center'></Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3} align='center'>
          <form onSubmit={submitHandler}>
            <Box
              display='flex'
              justifyContent='space-between'
              paddingTop='2rem'
            >
              <Box>
                <Typography gutterBottom>Bank Details</Typography>
              </Box>
            </Box>

            <Box display='flex' justifyContent='space-between'>
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
