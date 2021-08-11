import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../actions/userActions.js'
import { FaShoppingCart } from 'react-icons/fa'
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  Button,
} from '@material-ui/core'

import { black, useStyles } from '../utils/theme'
import logo from '../images/crumple-logo.jpg'

const NavBar = () => {
  const classes = useStyles()

  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const dispatch = useDispatch()

  const signoutHandler = () => {
    dispatch(signout())
  }

  return (
    <AppBar
      style={{ backgroundColor: black }}
      position='sticky'
      className={classes.appBar}
    >
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
          <Link to='/categories' className={classes.navlink}>
            DISCOVER
          </Link>
        </Box>
        <Box p='1.5rem'>
          <Link to='/about' className={classes.navlink}>
            ABOUT
          </Link>
        </Box>
        <Grid container justifyContent='flex-end'>
          <Box p='2rem 1rem'>
            <Link className='link' to={'/cart'}>
              <FaShoppingCart fontSize='1.4rem' className={classes.navlink} />
              {cartItems.length > 0 && (
                <span className='badge'>{cartItems.length}</span>
              )}
            </Link>
          </Box>

          {userInfo && userInfo.isAdmin ? (
            <Box py='1.5rem' pr='5rem' className='dropdown'>
              <Button variant='contained' to='/profile'>
                {userInfo.name}
              </Button>
              <ul className='dropdown-content'>
                <li>
                  <Link className='link' to={`/profile/${userInfo._id}`}>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className='link' to='/allusers'>
                    All users
                  </Link>
                </li>
                <li>
                  <Link className='link' to='#signout' onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </li>
              </ul>
            </Box>
          ) : userInfo ? (
            <Box py='1.5rem' pr='5rem' className='dropdown'>
              <Button variant='contained' to='/profile'>
                {userInfo.name}
              </Button>
              <ul className='dropdown-content'>
                <li>
                  <Link className='link' to={`/profile/${userInfo._id}`}>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className='link' to='#signout' onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </li>
              </ul>
            </Box>
          ) : (
            <>
              <Box py='1.5rem'>
                <Button component={Link} variant='contained' to='/signin'>
                  LOG IN
                </Button>
              </Box>
              <Box p='1.5rem' pr='5rem'>
                <Button
                  component={Link}
                  variant='contained'
                  color='primary'
                  to='/signup'
                >
                  SIGN UP
                </Button>
              </Box>
            </>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
