import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, AppBar, Toolbar, Grid } from '@material-ui/core'

import { black } from '../utils/theme'
import logo from '../images/crumple-logo.jpg'

const NavBar = () => {
  return (
    <AppBar style={{ backgroundColor: black }} position='sticky'>
      <Toolbar>
        <Box pl='5rem' py='0.5rem'>
          <Link to='/'>
            <img src={logo} alt='logo' width='60' />
          </Link>
        </Box>
        <Box pr='5rem'>
          <Typography variant='h5'>crumple</Typography>
        </Box>
        <Box p='1.5rem'>
          <Link to='/discover'>DISCOVER</Link>
        </Box>
        <Box p='1.5rem'>
          <Link to='/about'>ABOUT</Link>
        </Box>
        <Grid container justifyContent='flex-end'>
          <Box p='1.5rem'>
            <Typography>CART</Typography>
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
