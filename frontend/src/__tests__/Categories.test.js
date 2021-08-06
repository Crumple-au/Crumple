import React from 'react'
import ReactDOM from 'react-dom'

import { render } from '@testing-library/react'
import Categories from '../components/Categories.jsx'

describe('Categories Component Tests', () => {
  test('renders page without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Categories />, div)
  })

  xtest('renders categories', () => {
    const { getByText } = render(<Categories />)
    const linkElement = getByText(/drawing/i)
    expect(linkElement).toBeInTheDocument()
  })
})
