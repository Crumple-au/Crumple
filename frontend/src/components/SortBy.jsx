import React from 'react'
import {
  FormControl,
  FormGroup,
  TextField,
  MenuItem,
  Box,
} from '@material-ui/core'
import { useStyles } from '../utils/theme'

function SortBy({ label, sort, set }) {
  const classes = useStyles()

  const option1 = label === 'price' ? 'highest' : 'newest'
  const option2 = label === 'price' ? 'lowest' : 'oldest'

  return (
    <Box display='flex' flexDirection='row' justifyContent='center'>
      <FormGroup>
        <FormControl
          variant='outlined'
          size='small'
          className={classes.sortFormControl}
          fullWidth
        >
          <TextField
            variant='filled'
            size='small'
            label={label}
            role='dropdown'
            id={label}
            fullWidth
            inputProps={{ id: 'discover', 'data-testid': 'listbox' }}
            select
            defaultValue={label}
            value={sort}
            onChange={(e) => set(e.target.value)}
          >
            <MenuItem value={option1}>{option1}</MenuItem>
            <MenuItem value={option2}>{option2}</MenuItem>
          </TextField>
        </FormControl>
      </FormGroup>
    </Box>
  )
}

export default SortBy
