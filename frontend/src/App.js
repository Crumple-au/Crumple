import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import { Provider } from 'react-redux'
import { useMediaQuery } from 'react-responsive'

import NavBar from './components/NavBar'
import HomePage from './screens/HomePage'
import Categories from './components/Categories'
import MobileNavBar from './components/MobileNavBar'
import About from './screens/About'
import FAQs from './screens/FAQs'
import Error from './screens/Error'
import SigninPage from './screens/SigninPage'
import ProfilePage from './screens/ProfilePage'
import RegisterPage from './screens/RegisterPage'
import ListUsersPage from './screens/ListUsersPage'
import EditProfilePage from './screens/EditProfilePage'

import { theme } from './utils/theme'
import store from './store'

const App = () => {

  // for mobile devices
  const isSmallScreen = useMediaQuery({ minWidth: 200, maxWidth: 800 });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          {/* <NavBar /> */}
          { isSmallScreen ? <MobileNavBar /> : <NavBar/> }
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
            <Route path='/profile/edit/:userId' component={EditProfilePage} />
            <Route path='/profile/:userId' component={ProfilePage} />
            <Route path='/users/allusers' component={ListUsersPage} />

            <Route path='*'>
              <Error />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
