import React from 'react'
import HomePage from './screens/HomePage'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './utils/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  )
}

export default App
