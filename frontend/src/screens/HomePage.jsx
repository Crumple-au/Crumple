import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Box, Button, Grid } from '@material-ui/core'

import { primary, secondary } from '../utils/theme'
import stick0 from '../images/crumple-stick0.jpg'

const HomePage = () => {
  return (
    <Box display='flex' pt='6em'>
      <Grid container>
        <Grid item xs={12} sm={12} md={2} align='center'></Grid>
        <Grid item xs={12} sm={12} md={4} align='center'>
          <Box
            display='flex'
            flexDirection='column'
            height='100%'
            alignItems='center'
            justifyContent='center'
          >
            <Typography variant='h2'>made for makers</Typography>
            <Typography variant='h5' color='textSecondary'>
              <span style={{ color: primary }}>crumple</span> makes it easy
            </Typography>
            <Typography variant='h5' color='textSecondary'>
              for <span style={{ color: secondary }}>artists</span> and{' '}
              <span style={{ color: secondary }}>creatives</span>
            </Typography>
            <Typography variant='h5' color='textSecondary'>
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

        <Grid item xs={12} sm={12} md={4} align='center'>
          <Box>
            <img src={stick0} alt='stickman' height='auto' width='350'></img>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={2} align='center'></Grid>
      </Grid>
    </Box>
  )
}

export default HomePage
