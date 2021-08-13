import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../actions/userActions.js'
import { FaShoppingCart } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import {
  Box,
  AppBar,
  Toolbar,
  Grid,
  Button,
  Typography,
} from '@material-ui/core'

import { black, useStyles } from '../utils/theme'
import logo from '../images/crumple-logo.jpg'

const MobileNavBar = () => {
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
      style={{ height: '5rem', backgroundColor: black }}
      position='sticky'
      className={classes.appBar}
    >
      <Toolbar>
        <Box py='1.5rem'>
          <Link to='/'>
            <img src={logo} alt='logo' width='60' />
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
            <Box py='1.5rem' className='dropdown'>
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
                  <Link className='link' to={'/orderHistory'}>
                    Order history
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
            <Box py='1.5rem' className='dropdown'>
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
                  <Link className='link' to={'/orderHistory'}>
                    Order history
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
              <Box py='1.5rem' className='dropdown'>
                <Box to='#' variant='contained'>
                  <FiMenu size={30} />
                </Box>

                <ul className='dropdown-content'>
                  <li py='1.5rem'>
                    <Link className={classes.navlink} to='/signin'>
                      LOG IN
                    </Link>
                  </li>

                  <li p='1.5rem'>
                    <Link className={classes.navlink} to='/signup'>
                      SIGN UP
                    </Link>
                  </li>

                  <li p='1.5rem'>
                    <Link to='/categories' className={classes.navlink}>
                      DISCOVER
                    </Link>
                  </li>

                  <li p='1.5rem'>
                    <Link to='/about' className={classes.navlink}>
                      ABOUT
                    </Link>
                  </li>
                </ul>
              </Box>
            </>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default MobileNavBar
