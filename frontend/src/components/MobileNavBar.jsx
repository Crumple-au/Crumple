import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions.js';
import { FaShoppingCart } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
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

const MobileNavBar = () => {
    const classes = useStyles()

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const dispatch = useDispatch();

    const signoutHandler = () => {
        dispatch(signout());
    };

return (
        <AppBar style={{ height: '5rem', backgroundColor: black }} position='sticky'>
            <Toolbar >

                <Box py='1.5rem'>
                    <Link to='/'>
                        <img src={logo} alt='logo' width='60' />
                    </Link>
                </Box>

            {userInfo && userInfo.isAdmin ? (
                <Box py='1.5rem' className="dropdown">
                    <Button to="#" variant='contained' to='/profile'>
                        {userInfo.name}
                    </Button>

                    <ul className="dropdown-content">

                        <li>
                            <Link className="link" to={`/profile/${userInfo._id}`}>
                                Profile
                            </Link>
                        </li>

                        <li>
                            <Link className="link" to={`/profile/edit/${userInfo._id}`}>
                                Edit Profile
                            </Link>
                        </li>

                        <li>
                            <Link className="link" to='/allusers'>
                                All users
                            </Link>
                        </li>

                        <li>
                            <Link className="link" to="#signout" onClick={signoutHandler}>
                                Sign Out
                            </Link>
                        </li>
                        
                    </ul>
                </Box>
            )
            :
            userInfo ? (
                <Box py='1.5rem' className="dropdown">
                    <Button to="#" variant='contained' to='/profile'>
                        {userInfo.name}
                    </Button>
                    <ul className="dropdown-content">

                        <li>
                            <Link className="link" to={`/profile/${userInfo._id}`}>
                                Profile
                            </Link>
                        </li>

                        <li>
                            <Link className="link" to={`/profile/edit/${userInfo._id}`}>
                                Edit Profile
                            </Link>
                        </li>

                        <li>
                            <Link className="link" to="#signout" onClick={signoutHandler}>
                                Sign Out
                            </Link>
                        </li>

                    </ul>
                </Box>
            ): (
                <>
                <Grid container justifyContent='flex-end'>
                    <Box py='1.5rem' className="dropdown">

                        <Box to="#" variant='contained'>
                            <FiMenu size={30}/>
                        </Box>

                            <ul className="dropdown-content">

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
                                    <Link to='/discover' className={classes.navlink}>
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
                    </Grid>
                </>
            )}

            {/* </Grid> */}
            </Toolbar>
        </AppBar>
    )
}

export default MobileNavBar
