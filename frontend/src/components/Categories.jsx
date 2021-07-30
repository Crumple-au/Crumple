import React from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Box,
  Button,
} from '@material-ui/core'
import { FaSearch } from 'react-icons/fa'
import { useStyles } from '../utils/theme'

const Categories = () => {
  const classes = useStyles()
  return (
    <>
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
          <InputLabel id='discover'>DISCOVER</InputLabel>
          <Select labelId='discover' id='discover'>
            <MenuItem value='drawing'>DRAWING</MenuItem>
            <MenuItem value='design'>DESIGN</MenuItem>
            <MenuItem value='merch'>MERCH</MenuItem>
            <MenuItem value='books'>BOOKS</MenuItem>
            <MenuItem value='photos'>PHOTOS</MenuItem>
            <MenuItem value='film'>FILM</MenuItem>
            <MenuItem value='music'>MUSIC</MenuItem>
            <MenuItem value='crafts'>CRAFTS</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant='filled' size='small'>
          <TextField
            variant='outlined'
            id='search'
            size='small'
            className={classes.textForm}
          />
        </FormControl>
        <FormControl variant='filled' size='small'>
          <Button className={classes.textForm} variant='contained'>
            <FaSearch fontSize='1.6rem' />
          </Button>
        </FormControl>
      </Box>
    </>
  )
}

export default Categories
