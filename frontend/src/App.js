import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'

import NavBar from './components/NavBar'
import Categories from './components/Categories.jsx'
import About from './screens/About.jsx'
import FAQs from './screens/FAQs.jsx'
import Error from './screens/Error.jsx'
import { theme } from './utils/theme'

//PAGES
import HomePage from './screens/HomePage'
import SigninPage from './screens/SigninPage'
import RegisterPage from './screens/RegisterPage'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/discover'>
            <Categories />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/faqs'>
            <FAQs />
          </Route>
          <Route path='/signin' component={SigninPage} />
          <Route path='/signup' component={RegisterPage} />
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
