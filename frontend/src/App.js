import React from 'react'
import NavBar from './components/NavBar'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './utils/theme'
import { BrowserRouter, Route, Link } from 'react-router-dom';

//PAGES
import HomePage from './screens/HomePage'
import SigninPage from './screens/SigninPage'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        {/* <HomePage /> */}
        <main className="main">
          <Route path="/signin" component={SigninPage} />
          <Route path="/" exact={true} component={HomePage} />
        </main>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
