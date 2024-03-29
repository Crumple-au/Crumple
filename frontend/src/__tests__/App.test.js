import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { render } from '@testing-library/react'
import App from '../App'
import configureStore from 'redux-mock-store'

describe('App Component Tests', () => {
  const initialState = {
    userSignin: {},
    cart: {
      cartItems: 'photo',
      shippingAddress: 'Sydney',
      paymentMethod: 'Paypal',
    },
  }
  const mockStore = configureStore()

  test('renders main page without crashing', () => {
    const store = mockStore(initialState)

    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    )
  })

  test('renders headline', () => {
    const store = mockStore(initialState)

    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const linkElement = getByText(/made for makers/i)
    expect(linkElement).toBeInTheDocument()
  })
})

// button test
