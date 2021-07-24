import React from 'react'
import { Box, Typography, AppBar, Toolbar, Grid } from '@material-ui/core'
import { black } from '../utils/theme'
import logo from '../images/crumple-logo.jpg'

const NavBar = () => {
  return (
    <AppBar style={{ backgroundColor: black }} position='sticky'>
      <Toolbar>
        <Box pl='5rem' py='0.5rem'>
          <img src={logo} alt='logo' width='60' />
        </Box>
        <Box pr='5rem'>
          <Typography variant='h5'>crumple</Typography>
        </Box>
        <Box p='1.5rem'>
          <Typography>DISCOVER</Typography>
        </Box>
        <Box p='1.5rem'>
          <Typography>ABOUT</Typography>
        </Box>
        <Grid container justify='flex-end'>
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
