import React, { useState } from 'react'
import {
  FormControl,
  MenuItem,
  TextField,
  Box,
  Button,
} from '@material-ui/core'
import { FaSearch } from 'react-icons/fa'
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
      <FormControl
        variant='outlined'
        size='small'
        className={classes.formControl}
      >
        <TextField
          variant='outlined'
          size='small'
          label='DISCOVER'
          id='discover'
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
          size='small'
          className={classes.textForm}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </FormControl>
      <Box>
        <Button
          type='submit'
          onClick={handleSubmit}
          className={classes.textForm}
          variant='contained'
          size='large'
        >
          <FaSearch fontSize='1.4rem' />
        </Button>
      </Box>
    </Box>
  )
}

export default SearchBar
