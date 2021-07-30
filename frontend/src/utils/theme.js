import { createTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#6184C4',
    },
    secondary: {
      main: '#F62D01',
    },
    info: {
      main: '#323232',
    },
  },
  typography: {
    fontFamily: 'Prompt',
    h1: {
      fontWeight: 500,
    },
  },
})

export const useStyles = makeStyles({
  navlink: {
    color: '#ffffff',
    textDecoration: 'none',
    'a:visited': {
      color: '#ffffff',
    },
  },
  formControl: {
    minWidth: 120,
    marginTop: '1rem',
  },
  textForm: {
    marginTop: '1rem',
  },
})

export const primary = '#6184C4'
export const secondary = '#F62D01'
export const black = '#323232'
