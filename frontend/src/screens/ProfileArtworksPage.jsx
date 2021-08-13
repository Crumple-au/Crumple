import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listArtworks } from '../actions/artworkActions'
import { useParams, Link, useLocation } from 'react-router-dom'
import Artworks from '../components/Artworks'
import { Button, Box, Grid, Typography } from '@material-ui/core'
import SortBy from '../components/SortBy'
import { secondary } from '../utils/theme'

function ProfileArtworksPage(props) {
  const { userId } = useParams()
  const { pathname } = useLocation()

  const artworkList = useSelector((state) => state.artworkList)
  const { loading, artworks, error } = artworkList

  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  const dispatch = useDispatch()

  const [sortOrder, setSortOrder] = useState('')
  // const [sortPrice, setSortPrice] = useState('')

  // console.log(artworks)

  useEffect(() => {
    if (!artworks || sortOrder) {
      dispatch(
        listArtworks({
          seller: userId,
          order: sortOrder,
        })
      )
    }
  }, [dispatch, userId, pathname, sortOrder])

  return (
    <Box>
      <Typography align='center' gutterBottom variant='h3'>
        your <span style={{ color: secondary }}>creations</span>
      </Typography>
      <Typography align='center' gutterBottom color='textSecondary'>
        {' '}
        Build a list of all your creations to share to the world.
      </Typography>
      <Box
        display='flex'
        justifyContent='center'
        marginBottom='3rem'
        marginTop='3rem'
      >
        {userInfo._id === userId && (
          <Button
            variant='contained'
            color='primary'
            component={Link}
            to={`/profile/${userId}/createArtwork`}
          >
            New Artwork
          </Button>
        )}
      </Box>

      <Box display='flex' justifyContent='center' marginBottom='1rem'>
        <Box>
          <Typography align='center'>Sort By</Typography>
          {/* <SortBy label="PRICE" sort={sortPrice} set={setSortPrice}/> */}
          <SortBy label='CREATED' sort={sortOrder} set={setSortOrder} />
        </Box>
      </Box>

      <Grid container spacing={3} justifyContent='center' alignItems='center'>
        {artworks &&
          artworks.map((item) => {
            return (
              <div key={item._id}>
                <Artworks artwork={item} height='400px' />
              </div>
            )
          })}
      </Grid>
    </Box>
  )
}

export default ProfileArtworksPage
