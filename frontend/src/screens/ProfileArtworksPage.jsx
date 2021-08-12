import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listArtworks } from '../actions/artworkActions'
import { useParams, Link, useLocation } from 'react-router-dom'
import Artworks from '../components/Artworks'
import { Button, Box, Grid } from '@material-ui/core'
import SortBy from '../components/SortBy'

function ProfileArtworksPage(props) {
  const { userId } = useParams()
  const { pathname } = useLocation()

  const artworkList = useSelector((state) => state.artworkList)
  const { loading, artworks, error } = artworkList

  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  const dispatch = useDispatch()

  const [sortOrder, setSortOrder] = useState('')
  const [sortPrice, setSortPrice] = useState('')

  // console.log(artworks)

  useEffect(() => {
    if (!artworks || sortOrder || sortPrice) {
      dispatch(
        listArtworks({ 
          seller: userId,
          order: sortOrder,
          price: sortPrice
        })
      )
    }
  }, [dispatch, userId, pathname, sortOrder])

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

      <Box display='flex' justifyContent='center' marginBottom='1rem'>
        <SortBy label="price" sort={sortPrice} set={setSortPrice}/>
        <SortBy label="sort by" sort={sortOrder} set={setSortOrder}/>
      </Box>

      <Grid container spacing={3} justifyContent='center' alignItems='center'>
      {artworks && artworks.map((item) => {
        return (
          <div key={item._id}>
            <Artworks artwork={item}  height={'300px'} />
          </div>
        )
      })}
      </Grid>
    </Box>
  )
}

export default ProfileArtworksPage
