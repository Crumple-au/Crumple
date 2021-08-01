import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import App from '../App'

describe('App Component Tests', () => {
  test('renders main page without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  test('renders headline', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/made for makers/i)
    expect(linkElement).toBeInTheDocument()
  })
})

// button test
