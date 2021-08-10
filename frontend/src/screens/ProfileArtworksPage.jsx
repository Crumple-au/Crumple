import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listArtworks } from '../actions/artworkActions'
import { useParams, Link, useLocation } from 'react-router-dom'
import Artworks from '../components/Artworks'
import { Button, Box, Grid } from '@material-ui/core'

function ProfileArtworksPage(props) {
  const { userId } = useParams()
  const { pathname } = useLocation()
  const artworkList = useSelector((state) => state.artworkList)
  const { artworks } = artworkList
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listArtworks({ seller: userId }))
  }, [])
  useEffect(() => {
    // console.log(pathname)
    if (artworks === undefined) {
      dispatch(listArtworks({ seller: userId }))
    }
  }, [dispatch, artworks, userId, pathname])

  return (
    <Box m='2rem'>
      <Box display='flex' justifyContent='center' marginBottom='1rem'>
        {userInfo._id === userId && (
          <Button
            variant='contained'
            component={Link}
            to={`/profile/${userId}/createArtwork`}
          >
            Upload Artwork
          </Button>
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
