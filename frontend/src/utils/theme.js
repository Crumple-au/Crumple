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
    h2: {
      fontWeight: 500,
    },
  },
})

const drawerWidth = 300

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
  card: {
    margin: '1rem',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#323232',
  },
  drawerRoot: {
    display: 'flex',
    flexDirection: 'column',
    toolbar: theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  bottomPush: {
    position: 'fixed',
    bottom: 0,
    paddingBottom: 10,
  },
  fontColor: {
    color: '#ffffff',
  },
  dividerColor: {
    backgroundColor: '#ffffff',
  },
  active: {
    background: '#6184C4',
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
})

export const primary = '#6184C4'
export const secondary = '#F62D01'
export const black = '#323232'
export const grey = '#E5E5E5'
