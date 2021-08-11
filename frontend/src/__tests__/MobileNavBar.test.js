import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import MobileNavBar from '../components/MobileNavBar.jsx'
import configureStore from 'redux-mock-store'

describe('MobileNavBar Component Tests', () => {
  const initialState = {
    userSignin: {},
    cart: {
      cartItems: 'photo',
      shippingAddress: 'Sydney',
      paymentMethod: 'Paypal',
    },
  }
  const mockStore = configureStore()
  test('renders page without crashing', () => {
    const store = mockStore(initialState)
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <MobileNavBar />
        </Router>
      </Provider>,
      div
    )
  })
})
