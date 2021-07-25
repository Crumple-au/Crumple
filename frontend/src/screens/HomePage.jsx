import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Typography, Box, Button } from '@material-ui/core'

import { primary, secondary } from '../utils/theme'
import stick0 from '../images/crumple-stick0.jpg'

const HomePage = () => {
  return (
    <Box my='4vh'>
      <Box
        display='flex'
        flexDirection='column'
        height='30vh'
        width='auto'
        alignItems='center'
        justifyContent='center'
        pt='11vh'
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
            component={RouterLink}
            to='/discover'
            variant='contained'
            color='primary'
          >
            Get Started
          </Button>
        </Box>
      </Box>
      <Box p='3rem' pl='5rem'>
        <img src={stick0} alt='stickman' height='900' width='auto'></img>
      </Box>
    </Box>
  )
}

export default HomePage
