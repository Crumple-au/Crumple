import React from 'react'
import { ThemeProvider, Typography } from '@material-ui/core'
import { theme } from './utils/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography style={{ fontWeight: 500 }}>made for makers</Typography>
      <Typography component='span' color='primary'>
        crumple
      </Typography>{' '}
      <Typography component='span'>makes it easy</Typography>
      <br />
      <Typography component='span'>for </Typography>
      <Typography component='span' color='secondary'>
        artists
      </Typography>{' '}
      and{' '}
      <Typography component='span' color='secondary'>
        creatives
      </Typography>
      <Typography>to get paid for their work.</Typography>
    </ThemeProvider>
  )
}

export default App
