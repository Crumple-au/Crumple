import React, { useState } from 'react'
import {
  FormControl,
  FormGroup,
  MenuItem,
  TextField,
  OutlinedInput,
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
        <FormControl
          variant='filled'
          size='small'
          className={classes.formControl}
        >
          <OutlinedInput
            type='text'
            id='search'
            placeholder='What are you looking for?'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name='search'
            margin='dense'
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <Button
            type='submit'
            id='search-button'
            data-testid='search-button'
            onClick={handleSubmit}
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
