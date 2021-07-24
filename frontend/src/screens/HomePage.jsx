import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { primary, secondary } from '../utils/theme'

const HomePage = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      height='65vh'
      width='auto'
      alignItems='center'
      justifyContent='center'
    >
      <Typography variant='h1'>made for makers</Typography>
      <Typography variant='h3' color='textSecondary'>
        <span style={{ color: primary }}>crumple</span> makes it easy
      </Typography>
      <Typography variant='h3' color='textSecondary'>
        for <span style={{ color: secondary }}>artists</span> and{' '}
        <span style={{ color: secondary }}>creatives</span>
      </Typography>
      <Typography variant='h3' color='textSecondary'>
        to get paid for their work.
      </Typography>
    </Box>
  )
}

export default HomePage
