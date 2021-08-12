import React, { useState, useEffect } from 'react'
import {
  Box,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from '@material-ui/core'
import SearchBar from './SearchBar'
import Artworks from './Artworks.jsx'
import Alert from './Alert'
import Preloader from './Preloader'
import SortBy from '../components/SortBy'
import { useParams } from 'react-router-dom'
import { useFetch } from '../utils/helpers'
import { useStyles } from '../utils/theme'
import { useDispatch, useSelector } from 'react-redux'
import { listArtworksAll, listArtworks } from '../actions/artworkActions'

const Category = () => {
  const { id } = useParams()
  const { element } = useFetch(`/api/categories/${id}`)
  const classes = useStyles()
  const dispatch = useDispatch()

  const artworkList = useSelector((state) => state.artworkList)
  const { artworks, loading, error, count } = artworkList

  const [sortOrder, setSortOrder] = useState('')
  const [sortPrice, setSortPrice] = useState('')
  const [filter, setFilter] = useState([])
  // console.log(count)

  useEffect(() => {
    if (element || sortOrder) {
      dispatch(
        listArtworks({
          category: element.name,
          order: sortOrder,
          price: sortPrice,
        })
      )
    }

    // const filteredArtworks = artworks.filter((artwork) => {
    //   return artwork.name.toLowerCase().includes('mona')
    // })
    // setFilter(filteredArtworks)
    // console.log(filteredArtworks)
  }, [dispatch, element, sortOrder, sortPrice])

  // console.log(artworks)
  return (
    <>
      <SearchBar />
      <Box m='4rem 2rem 2rem 2rem'>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12} align='center'>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia>
                  <Box
                    display='flex'
                    justifyContent='center'
                    p='1rem'
                    border={3}
                  >
                    <img
                      src={element.image}
                      alt={element.altName}
                      height='100px'
                      width='100px'
                    />
                  </Box>
                </CardMedia>
                <CardContent>
                  <Typography align='center'>{element.name}</Typography>
                  <Typography align='center' color='textSecondary'>
                    {element.description}
                  </Typography>
                  <Typography align='center' color='textSecondary'>
                    {count} artworks found
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardContent>
                <SortBy label='price' sort={sortPrice} set={setSortPrice} />
                <SortBy label='sort by' sort={sortOrder} set={setSortOrder} />
              </CardContent>
              <CardActions>
                <Box></Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        {loading ? (
          <>
            <Preloader />
          </>
        ) : error ? (
          <Alert variant='danger'>{error}</Alert>
        ) : (
          <Box>
            <Grid
              container
              spacing={0}
              justifyContent='center'
              alignItems='center'
            >
              {artworks &&
                artworks.map((item) => {
                  return (
                    <>
                      <Grid
                        item
                        key={item._id}
                        xs={12}
                        sm={4}
                        md={3}
                        lg={3}
                        xl={2}
                      >
                        <Artworks artwork={item} />
                      </Grid>
                    </>
                  )
                })}
            </Grid>
          </Box>
        )}
      </Box>
    </>
  )
}

export default Category
