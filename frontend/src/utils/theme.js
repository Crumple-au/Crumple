import { createTheme } from '@material-ui/core'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#6184C4',
    },
    secondary: {
      main: '#F62D01',
    },
  },
  typography: {
    fontFamily: 'Prompt',
    h1: {
      fontWeight: 500,
    },
  },
})

export const primary = '#6184C4'
export const secondary = '#F62D01'
