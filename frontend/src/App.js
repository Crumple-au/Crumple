import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import { Provider } from 'react-redux'
import { useMediaQuery } from 'react-responsive'

import NavBar from './components/NavBar'
import HomePage from './screens/HomePage'
import Categories from './components/Categories'
import Category from './components/Category'
import MobileNavBar from './components/MobileNavBar'
import About from './screens/About'
import FAQs from './screens/FAQs'
import Error from './screens/Error'
import SigninPage from './screens/SigninPage'
import ProfilePage from './screens/ProfilePage'
import RegisterPage from './screens/RegisterPage'
import ListUsersPage from './screens/ListUsersPage'
import CartPage from './screens/CartPage'
import ShippingPage from './screens/ShippingPage'
import PaymentPage from './screens/PaymentPage'
import ArtworkDetails from './components/ArtworkDetails.jsx'
import PrivateRoute from './components/PrivateRoute'
import AdminRoute from './components/AdminRoute'

import { theme } from './utils/theme'
import store from './store'
import PlaceOrderPage from './screens/PlaceOrderPage'
import OrderPage from './screens/OrderPage'
import ReceiptPage from './screens/ReceiptPage'
import OrderHistoryPage from './screens/OrderHistoryPage'

const App = () => {
  // for mobile devices
  const isSmallScreen = useMediaQuery({ minWidth: 200, maxWidth: 800 })

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          {isSmallScreen ? <MobileNavBar /> : <NavBar />}
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/categories'>
              <Categories />
            </Route>
            <Route path='/category/:id' children={<Category />} />
            <Route path='/artwork/:id' children={<ArtworkDetails />} />
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/faqs'>
              <FAQs />
            </Route>

            <Route path='/signin' component={SigninPage} />
            <Route path='/signup' component={RegisterPage} />
            <Route path='/profile/:userId' component={ProfilePage} />

            <AdminRoute 
              path='/allusers' component={ListUsersPage} >
            </AdminRoute>

            <PrivateRoute
              path='/cart/:artworkId?' component={CartPage}
            ></PrivateRoute>

            <PrivateRoute 
              path='/shipping' component={ShippingPage}>
            </PrivateRoute>

            <PrivateRoute
              path='/payment' component={PaymentPage}>
            </PrivateRoute>

            <PrivateRoute
              path='/placeorder' component={PlaceOrderPage}>
            </PrivateRoute>

            <PrivateRoute
              path='/order/:orderId' component={OrderPage}>
            </PrivateRoute>

            <PrivateRoute
              path='/orderHistory' component={OrderHistoryPage}>
            </PrivateRoute>

            <PrivateRoute
              path='/paypal/receipt/:orderId' component={ReceiptPage}>
            </PrivateRoute>

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
