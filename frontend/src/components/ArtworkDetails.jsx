import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { useFetch } from '../utils/helpers'
import art from '../images/crumple-artwork.jpg'

const ArtworkDetails = () => {
  const { id } = useParams()
  const { element } = useFetch(`/api/artworks/${id}`)
  const history = useHistory()
  console.log(history)

  return (
    <>
      <Box m='4rem 2rem 2rem 2rem'>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={2} align='center'></Grid>
          <Grid item xs={12} sm={12} md={4} align='center'>
            <Card>
              <CardMedia>
                <img
                  src={art}
                  alt={element.altName}
                  height='100%'
                  width='100%'
                  style={{ objectFit: 'cover' }}
                />
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} align='center'>
            <Card>
              <CardContent>
                <Box
                  display='flex'
                  justifyContent='space-between'
                  style={{ margin: '1rem' }}
                >
                  <Button variant='outlined'>$ {element.price}</Button>
                  <Button
                    component={Link}
                    to='#'
                    variant='contained'
                    color='primary'
                  >
                    Add to cart
                  </Button>
                </Box>
                <Typography gutterBottom align='center' variant='h5'>
                  {element.name}
                </Typography>
                <Typography gutterBottom color='textSecondary'>
                  x artist name
                </Typography>
                <Typography align='center' color='textSecondary'>
                  {element.description}
                </Typography>
              </CardContent>
              <Button
                style={{ margin: '1rem' }}
                variant='contained'
                onClick={() => history.goBack()}
              >
                Back
              </Button>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={2} align='center'></Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ArtworkDetails
