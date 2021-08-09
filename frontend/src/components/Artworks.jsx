import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import {
  Box,
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
  const classes = useStyles();
  const location = useLocation();
  // const [newArtworks, setNewArtworks] = useState([])

  // const filteredArtworks = newArtworks.filter((artwork) => {
  //   return artwork.name.toLowerCase().includes('mona')
  // })
  // setNewArtworks(filteredArtworks)
  // setNewArtworks(artworks)

  console.log(artwork)
  // console.log('newArtworks', newArtworks)

  return (
    <>
      {/* <Box m='4rem 2rem 2rem 2rem'> */}
      {/* <Grid container spacing={0} justifyContent='center' alignItems='center'> */}
      {/* <Grid
                  item
                  xs={12}
                  sm={4}
                  md={3}
                  lg={3}
                  xl={2}
                  key={artwork._id}
                > */}
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia>
            <Box display='flex' justifyContent='center' border={3}>
              <img
                src={artwork.image || art}
                alt={artwork.name}
                height='300px'
                width='300px'
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </CardMedia>
          <CardContent>
            <Link to={`/artwork/${artwork._id}`}>
              <Typography>{artwork.name}</Typography>
            </Link>
            <Typography color='textSecondary'>
              <Link to={`profile/${artwork.seller._id}`}>
                {artwork.seller.name}
              </Link>
              <img src={artwork.seller.image} alt={artwork.name} width="40px" height="40px" style={{borderRadius: '50%'}}></img>
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button size='small'>$ {artwork.price}</Button>
          {location.pathname === '/cart'
          ?
          <Button variant='contained' onClick={onRemove} size='small'>
            delete
          </Button>
          : ''
        }
          
        </CardActions>
      </Card>
      {/* </Grid> */}
      {/* </Grid> */}
      {/* </Box> */}
    </>
  )
}

export default Artworks
