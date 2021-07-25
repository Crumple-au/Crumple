import React from 'react'
import { Box, Typography, AppBar, Toolbar, Grid } from '@material-ui/core'
import { black } from '../utils/theme'
import logo from '../images/crumple-logo.jpg'
import { BrowserRouter, Route, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <BrowserRouter>
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
          <Grid container justifyContent='flex-end'>
            <Box p='1.5rem'>
              <Typography>CART</Typography>
            </Box>
            <Box p='1.5rem'>
              <Link to="/signin">
                <Typography>LOGIN</Typography>
              </Link>
            </Box>
            <Box p='1.5rem' pr='5rem'>
              <Typography>SIGN UP</Typography>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </BrowserRouter>
  )
}

export default NavBar
