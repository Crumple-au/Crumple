import React from 'react'
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react'
import SearchBar from '../components/SearchBar.jsx'

describe('SearchBar Component Tests', () => {
  test('renders page without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SearchBar />, div)
  })

  test('takes user search input', () => {
    const utils = render(<SearchBar />)
    const input = utils.getByLabelText(/looking/i)
    fireEvent.change(input, { target: { value: 'asdf' } })
    expect(input.value).toBe('asdf')
  })

  test('takes user category selection', () => {
    const { getByRole, getByTestId } = render(<SearchBar />)
    fireEvent.mouseDown(getByRole('dropdown'))
    const list = getByTestId('listbox')
    fireEvent.change(list, { target: { value: 'crafts' } })
    expect(list.value).toBe('crafts')
  })

  test('accepts user click on submit', async () => {
    const mockSubmit = jest.fn()
    const button = shallow(<SearchBar onClick={mockSubmit}></SearchBar>)
    const fakeEvent = { preventDefault: jest.fn() }
    button.find('#search-button').simulate('click', fakeEvent)
    // expect(mockSubmit.mock.calls.length).toBe(1)
    expect(fakeEvent.preventDefault).toBeCalledTimes(1)
    // --
    // const spy = jest.spyOn(wrapper.instance(), 'onSubmit')
    // wrapper.find('#search-button').simulate('click')
    // expect(spy).toHaveBeenCalledTimes(1)
    // --
    // const { getByTestId } = render(<SearchBar />)
    // const evt = { preventDefault: jest.fn() }
    // fireEvent.click(getByTestId('search-button'), evt)
    // expect(evt.preventDefault).toHaveBeenCalledTimes(1)
    // --
  })
})
