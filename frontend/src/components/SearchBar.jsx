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
import { useHistory } from 'react-router-dom'
import { useStyles } from '../utils/theme'

const SearchBar = () => {
  const classes = useStyles()
  const history = useHistory()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    // e.preventDefault()
    // console.log(category, search)
    // setSearch('')
    history.push(category)
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
            <MenuItem value='61147d0d8abae435f473c1a4'>DRAWING</MenuItem>
            <MenuItem value='61147d0d8abae435f473c1a5'>DESIGN</MenuItem>
            <MenuItem value='61147d0d8abae435f473c1a6'>MERCH</MenuItem>
            <MenuItem value='61147d0d8abae435f473c1a7'>BOOKS</MenuItem>
            <MenuItem value='61147d0d8abae435f473c1a8'>PHOTOS</MenuItem>
            <MenuItem value='61147d0d8abae435f473c1a9'>FILM</MenuItem>
            <MenuItem value='61147d0d8abae435f473c1aa'>MUSIC</MenuItem>
            <MenuItem value='61147d0d8abae435f473c1ab'>CRAFTS</MenuItem>
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
