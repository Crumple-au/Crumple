import React from 'react'
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

const Artworks = ({ user, artworks }) => {
  const classes = useStyles()

  // console.log(artworks)
  // const filteredArtworks = artworks.filter((artwork) => {
  //   return artwork.name.toLowerCase().includes('mona')
  // })

  // console.log(filteredArtworks)

  return (
    <>
      <Box m='4rem 2rem 2rem 2rem'>
        <Grid container spacing={0} justifyContent='center' alignItems='center'>
          {artworks &&
            artworks.map((artwork) => {
              return (
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
                          By x artist name
                        </Typography>
                      </CardContent>
                    </CardActionArea>

                    <CardActions>
                      <Button size='small'>$ {artwork.price}</Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
        </Grid>
      </Box>

      {/* <main className='main'>
      {user.name}'s Artworks
      {artworks.map((artwork) => (
        <ul key={artwork._id}>
          <li>{artwork.name}</li>
          <li>Category: {artwork.category}</li>
          <li>{artwork.description}</li>
          <li>${artwork.price}</li>
          <br></br>
        </ul>
      ))}
    </main> */}
    </>
  )
}

export default Artworks
