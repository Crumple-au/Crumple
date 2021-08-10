import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
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
import Alert from '../components/Alert'

// Assets
import { register } from '../actions/userActions'
import logo from '../images/crumple-logo.jpg'

function RegisterPage(props) {
  const history = useHistory()

  const userRegister = useSelector((state) => state.userRegister)
  const { userInfo, error } = userRegister
  const dispatch = useDispatch()

  const [confirmPassword, setConfirmPassword] = useState('')
  const [noMatch, setNoMatch] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

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

  const submitHandler = (e) => {
    e.preventDefault()

    if (values.password !== confirmPassword) {
      setNoMatch('Password and confirm password are not match')
    } else {
      dispatch(register(name, email, values.password))
    }
  }

  useEffect(() => {
    if (userInfo) {
      history.push(`/profile/${userInfo._id}/settings`)
    }
  }, [userInfo, history])

  return (
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
                    {noMatch && (
                      <Alert variant='alert alert-danger'>{noMatch}</Alert>
                    )}
                    {error && (
                      <Alert variant='alert alert-danger'>{error}</Alert>
                    )}
                  </div>
                  <Typography gutterBottom>
                    Join a community of creators!
                  </Typography>
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    paddingTop='1rem'
                  >
                    <InputLabel htmlFor='name'>Name</InputLabel>
                  </Box>
                  <OutlinedInput
                    type='text'
                    name='name'
                    id='name'
                    required
                    onChange={(e) => setName(e.target.value)}
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
                    <InputLabel htmlFor='email'>Email</InputLabel>
                    <Link className='link' to='/signin'>
                      <Typography style={{ fontSize: '13px' }} align='right'>
                        Already have an account?
                      </Typography>
                    </Link>
                  </Box>
                  <OutlinedInput
                    type='email'
                    name='email'
                    id='email'
                    required
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
                  </Box>
                  <OutlinedInput
                    id='password'
                    name='password'
                    required
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
                    display='flex'
                    justifyContent='space-between'
                    paddingTop='1rem'
                  >
                    <InputLabel htmlFor='confirmPassword'>
                      Confirm Password
                    </InputLabel>
                  </Box>
                  <OutlinedInput
                    id='confirmPassword'
                    name='confirmPassword'
                    variant='outlined'
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    margin='dense'
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    type={values.showPassword ? 'text' : 'password'}
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
                  <Box paddingTop='1rem' display='flex' justifyContent='center'>
                    <Button type='submit' variant='contained' color='primary'>
                      Sign up
                    </Button>
                  </Box>
                </form>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default RegisterPage
