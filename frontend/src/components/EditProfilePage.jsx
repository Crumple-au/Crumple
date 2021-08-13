import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserProfile, detailsUser } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import Alert from '../components/Alert'
import Preloader from '../components/Preloader'
import UploadModal from '../components/UploadModal'
import {
  Box,
  Grid,
  Typography,
  Button,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@material-ui/core'
import '../style/profile.scss'
import { secondary } from '../utils/theme'

function EditProfilePage(props) {
  const { userId } = useParams()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [show, setShow] = useState(false)

  const userDetails = useSelector((state) => state.userDetails)
  const { user } = userDetails

  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdateProfile

  const dispatch = useDispatch()

  const submitHandler = async (e) => {
    e.preventDefault()

    dispatch(
      updateUserProfile({
        userId: userId,
        name,
        email,
        description,
      })
    )
  }

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET })
      dispatch(detailsUser(userId))
    }

    if (!user) {
      dispatch(detailsUser(userId))
    } else {
      setName(user.name)
      setEmail(user.email)
      setDescription(user.description)
    }
  }, [dispatch, user, successUpdate, errorUpdate, props.history, userId])

  return userInfo && userInfo._id ? (
    <>
      <Box>
        <Typography align='center' gutterBottom variant='h3'>
          edit your <span style={{ color: secondary }}>details</span>
        </Typography>
        <Typography align='center' gutterBottom color='textSecondary'>
          {' '}
          Keep your details up-to-date and interesting.
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={3} md={4} lg={4} xl={4} align='center'></Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} align='center'>
            <Box marginTop='3rem'>
              <Button variant='contained' onClick={() => setShow(true)}>
                Update Profile Photo
              </Button>
            </Box>
            {show && <UploadModal onClose={() => setShow(false)} />}

            <form onSubmit={submitHandler}>
              {loadingUpdate && <Preloader />}
              {successUpdate && (
                <Alert variant='success'>User Updated Succussfully</Alert>
              )}
              {errorUpdate && <Alert variant='danger'>{errorUpdate}</Alert>}
              <Box
                display='flex'
                justifyContent='space-between'
                paddingTop='1rem'
              ></Box>

              <Box display='flex' justifyContent='space-between'>
                <InputLabel htmlFor='name'>Name</InputLabel>
              </Box>
              <OutlinedInput
                id='name'
                type='text'
                value={name}
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
              ></Box>
              <Box display='flex' justifyContent='space-between'>
                <InputLabel htmlFor='email'>Email</InputLabel>
              </Box>
              <OutlinedInput
                id='email'
                type='email'
                value={email}
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
              ></Box>
              <Box display='flex' justifyContent='space-between'>
                <InputLabel htmlFor='description'>Description</InputLabel>
              </Box>
              <TextField
                id='description'
                type='text'
                placeholder='Enter your description'
                value={description}
                maxLength='140'
                required
                onChange={(e) => setDescription(e.target.value)}
                multiline
                rows={4}
                rowsMax={4}
                variant='outlined'
                margin='dense'
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <Box paddingTop='1rem' display='flex' justifyContent='center'>
                <Button type='submit' variant='contained' color='primary'>
                  Update
                </Button>
              </Box>
            </form>
          </Grid>
          <Grid item xs={12} sm={3} md={4} lg={4} xl={4} align='center'></Grid>
        </Grid>
      </Box>
    </>
  ) : (
    <h1 className='card-title'>
      Sorry but you do not have access to this page :/
    </h1>
  )
}
export default EditProfilePage
