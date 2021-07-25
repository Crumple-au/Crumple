import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { Box, Typography, AppBar, Toolbar, Grid } from '@material-ui/core'

import { black, useStyles } from '../utils/theme'
import logo from '../images/crumple-logo.jpg'

const NavBar = () => {
  const classes = useStyles()

  return (
    <AppBar style={{ backgroundColor: black }} position='sticky'>
      <Toolbar>
        <Box pl='5rem' py='0.5rem'>
          <Link to='/'>
            <img src={logo} alt='logo' width='60' />
          </Link>
        </Box>
        <Box pr='5rem'>
          <Link to='/' className={classes.navlink}>
            <Typography variant='h5'>crumple</Typography>
          </Link>
        </Box>
        <Box p='1.5rem'>
          <Link to='/discover' className={classes.navlink}>
            DISCOVER
          </Link>
        </Box>
        <Box p='1.5rem'>
          <Link to='/about' className={classes.navlink}>
            ABOUT
          </Link>
        </Box>
        <Grid container justifyContent='flex-end'>
          <Box p='1.5rem'>
            <FaShoppingCart />
          </Box>
          <Box p='1.5rem'>
            <Typography>LOGIN</Typography>
          </Box>
          <Box p='1.5rem' pr='5rem'>
            <Typography>SIGN UP</Typography>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar