import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core'
import { useStyles } from '../utils/theme'
import art from '../images/crumple-logo.jpg'

const Artworks = ({ user, artwork, onRemove }) => {
  const classes = useStyles()
  const [newArtworks, setNewArtworks] = useState([])

  // const filteredArtworks = newArtworks.filter((artwork) => {
  //   return artwork.name.toLowerCase().includes('mona')
  // })
  // setNewArtworks(filteredArtworks)
  // setNewArtworks(artworks)

  // console.log(artwork)
  // console.log('newArtworks', newArtworks)

  return (
    <>
      <Box m='4rem 2rem 2rem 2rem'>
        <Grid container spacing={0} justifyContent='center' alignItems='center'>
                <>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={3}
                  lg={3}
                  xl={2}
                  key={artwork._id}
                >
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia>
                        <Box display='flex' justifyContent='center' border={3}>
                          <img
                            src={art}
                            alt={artwork.name}
                            height='100%'
                            width='100%'
                            style={{ objectFit: 'cover' }}
                          />
                        </Box>
                      </CardMedia>
                      <CardContent>
                        <Link to={`/artwork/${artwork._id}`}>
                          <Typography>{artwork.name}</Typography>
                        </Link>
                        <Typography color='textSecondary'>
                          <Link to={`profile/${artwork.seller._id}`}>{artwork.seller.name}</Link>
                        </Typography>
                      </CardContent>
                    </CardActionArea>

                    <CardActions>
                      <Button size='small'>$ {artwork.price}</Button>
                      <Button onClick={onRemove} size='small'>delete</Button>
                    </CardActions>
                  </Card>
                </Grid>
            </>
        </Grid>
      </Box>
    </>
  )
}

export default Artworks
