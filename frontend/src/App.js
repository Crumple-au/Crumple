import React from 'react'
import HomePage from './screens/HomePage'
import NavBar from './components/NavBar'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './utils/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <HomePage />
    </ThemeProvider>
  )
}

export default App
