import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listArtworks } from '../actions/artworkActions'
import { signin } from '../actions/userActions.js'
import { useParams } from 'react-router-dom'
import Artworks from '../components/Artworks'
import UploadModal from '../components/UploadModal'
import { Button, Box, Grid } from '@material-ui/core'

function ProfileArtworksPage(props) {
  const { userId } = useParams()

  const artworkList = useSelector((state) => state.artworkList)
  const { artworks } = artworkList
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  console.log(userInfo)
  const dispatch = useDispatch()

  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!artworks) {
      dispatch(listArtworks({ seller: userId }))
    }
  }, [dispatch, artworks])
  return (
    <Box m='2rem'>
      <Box display='flex' justifyContent='center' marginBottom='1rem'>
        {userInfo._id === userId && (
          <>
            <Button
              variant='contained'
              color='primary'
              onClick={() => setShow(true)}
            >
              Upload Artwork
            </Button>
            {show && <UploadModal onClose={() => setShow(false)} />}
          </>
        )}
      </Box>

      <Grid container spacing={3} justifyContent='center' alignItems='center'>
        {artworks &&
          artworks.map((item) => <Artworks key={item._id} artwork={item} />)}
      </Grid>
    </Box>
  )
}

export default ProfileArtworksPage
