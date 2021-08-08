import React, { useState } from 'react'
import {
  FormControl,
  FormGroup,
  MenuItem,
  TextField,
  Box,
  Button,
} from '@material-ui/core'
import { useStyles } from '../utils/theme'

const SearchBar = () => {
  const classes = useStyles()

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(category, search)
    setSearch('')
  }

  return (
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='center'
      margin='2rem'
    >
      <FormGroup>
        <FormControl
          variant='outlined'
          size='small'
          className={classes.formControl}
        >
          <TextField
            variant='filled'
            size='small'
            label='DISCOVER'
            role='dropdown'
            id='discover'
            inputProps={{ id: 'discover', 'data-testid': 'listbox' }}
            select
            defaultValue=''
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value='drawing'>DRAWING</MenuItem>
            <MenuItem value='design'>DESIGN</MenuItem>
            <MenuItem value='merch'>MERCH</MenuItem>
            <MenuItem value='books'>BOOKS</MenuItem>
            <MenuItem value='photos'>PHOTOS</MenuItem>
            <MenuItem value='film'>FILM</MenuItem>
            <MenuItem value='music'>MUSIC</MenuItem>
            <MenuItem value='crafts'>CRAFTS</MenuItem>
          </TextField>
        </FormControl>
        <FormControl variant='filled' size='small'>
          <TextField
            variant='outlined'
            id='search'
            label='What are you looking for?'
            size='small'
            className={classes.textForm}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <Button
            type='submit'
            id='search-button'
            data-testid='search-button'
            onClick={handleSubmit}
            className={classes.textForm}
            variant='contained'
            size='large'
          >
            Search
          </Button>
        </FormControl>
      </FormGroup>
    </Box>
  )
}

export default SearchBar
