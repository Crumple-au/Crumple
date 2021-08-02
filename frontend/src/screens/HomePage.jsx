import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Box, Button, Grid } from '@material-ui/core'

import { primary, secondary } from '../utils/theme'
import stick0 from '../images/crumple-stick0.jpg'
import crumpleArt from '../images/crumple-artwork.jpg'

const HomePage = () => {
  return (
    <Box display='flex'>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} align='center'>
          <Box mt='3rem'>
            <img src={stick0} alt='stickman' height='750' width='auto'></img>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} align='center'>
          <Box
            display='flex'
            flexDirection='column'
            height='90vh'
            // width='auto'
            alignItems='center'
            justifyContent='center'
          >
            <Typography variant='h1'>made for makers</Typography>
            <Typography variant='h4' color='textSecondary'>
              <span style={{ color: primary }}>crumple</span> makes it easy
            </Typography>
            <Typography variant='h4' color='textSecondary'>
              for <span style={{ color: secondary }}>artists</span> and{' '}
              <span style={{ color: secondary }}>creatives</span>
            </Typography>
            <Typography variant='h4' color='textSecondary'>
              to get paid for their work.
            </Typography>

            <Box m='2rem'>
              <Button
                component={Link}
                to='/categories'
                variant='contained'
                color='primary'
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={2} align='center'>
          <Box p='0 5rem 0 0'>
            <img
              src={crumpleArt}
              alt='crumple-artwork'
              height='250'
              width='auto'
            ></img>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomePage
