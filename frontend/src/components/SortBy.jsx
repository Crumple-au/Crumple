import React from 'react'
import { FormControl, TextField, MenuItem, Box } from '@material-ui/core'
import { useStyles } from '../utils/theme'

function SortBy({ label, sort, set }) {
  const classes = useStyles()

  const option1 = label === 'price' ? 'highest' : 'newest'
  const option2 = label === 'price' ? 'lowest' : 'oldest'

  return (
    <Box mx='1rem'>
      <FormControl
        variant='outlined'
        size='small'
        className={classes.formControl}
      >
        <TextField
          variant='filled'
          size='small'
          label={label}
          id={label}
          inputProps={{ id: 'discover', 'data-testid': 'listbox' }}
          select
          defaultValue=''
          value={sort}
          onChange={(e) => set(e.target.value)}
        >
          <MenuItem value={option1}>{option1}</MenuItem>
          <MenuItem value={option2}>{option2}</MenuItem>
        </TextField>
      </FormControl>
    </Box>
  )
}

export default SortBy
