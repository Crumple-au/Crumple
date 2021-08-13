import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

// Components
import Alert from '../components/Alert.jsx'

// Assets
import { signin } from '../actions/userActions.js'
import logo from '../images/crumple-logo.jpg'

function SigninPage(props) {
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo, error } = userSignin

  const dispatch = useDispatch()

  const [email, setEmail] = useState('')

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/categories'

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(signin(email, values.password))
  }

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect)
    }
  }, [userInfo, props.history, redirect])

  return (
    <>
      <Box
        m='4rem 2rem 2rem 2rem'
        display='flex'
        alignItems='center'
        justifyContent='center'
        height='70vh'
      >
        <Grid container spacing={0} justifyContent='center' alignItems='center'>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
            <Card>
              <CardContent>
                <Box display='flex' justifyContent='center'>
                  <Box paddingTop='2rem' display='flex'>
                    <img src={logo} alt='crumple logo' width='60' />
                    <Box display='flex' p='1rem'>
                      <Typography variant='h6' component='span'>
                        crumple
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  paddingTop='2rem'
                  padding='2rem 1rem 0 1rem'
                  display='flex'
                  justifyContent='center'
                >
                  <form fullWidth onSubmit={submitHandler}>
                    <div className='alert-box'>
                      {error && (
                        <Alert variant='alert alert-danger'>{error}</Alert>
                      )}
                    </div>
                    <Typography gutterBottom>Welcome back.</Typography>

                    <Box
                      display='flex'
                      justifyContent='space-between'
                      paddingTop='1rem'
                    >
                      <InputLabel htmlFor='email'>Email</InputLabel>
                      <Link className='link' to='/signup'>
                        <Typography style={{ fontSize: '13px' }} align='right'>
                          New to crumple?
                        </Typography>
                      </Link>
                    </Box>

                    <OutlinedInput
                      type='email'
                      name='email'
                      id='email'
                      onChange={(e) => setEmail(e.target.value)}
                      variant='outlined'
                      margin='dense'
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <Box
                      display='flex'
                      justifyContent='space-between'
                      paddingTop='1rem'
                    >
                      <InputLabel htmlFor='password'>Password</InputLabel>

                      <Link className='link' to='#'>
                        <Typography style={{ fontSize: '13px' }} align='right'>
                          Forgot your password?
                        </Typography>
                      </Link>
                    </Box>
                    <OutlinedInput
                      id='password'
                      name='password'
                      variant='outlined'
                      margin='dense'
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge='end'
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <Box
                      paddingTop='1rem'
                      display='flex'
                      justifyContent='center'
                    >
                      <Button type='submit' variant='contained' color='primary'>
                        Sign in
                      </Button>
                    </Box>
                  </form>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default SigninPage
