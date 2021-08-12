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

const Artworks = ({ artwork, onRemove, height }) => {
  const classes = useStyles();
  const location = useLocation();
  // const [newArtworks, setNewArtworks] = useState([])

  // const filteredArtworks = newArtworks.filter((artwork) => {
  //   return artwork.name.toLowerCase().includes('mona')
  // })
  // setNewArtworks(filteredArtworks)
  // setNewArtworks(artworks)

  // console.log(artwork)
  // console.log('newArtworks', newArtworks)

  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia>
            <Box display='flex' justifyContent='center' border={3}>
              <img
                src={artwork.image || art}
                alt={artwork.name}
                height={height || '100%'}
                width={height || '100%'}
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </CardMedia>
          <CardContent>
            <Link to={`/artwork/${artwork._id}`} className='link'>
              <Typography>{artwork.name}</Typography>
            </Link>
            <Link to={`profile/${artwork.seller._id}`} className='link'>
              <Typography color='textSecondary'>
                {artwork.seller.name}
              </Typography>
              <img
                src={artwork.seller.image}
                alt={artwork.seller.name}
                width='40px'
                height='40px'
                style={{ borderRadius: '50%' }}
              ></img>
            </Link>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button size='small'>$ {artwork.price}</Button>
          {location.pathname === '/cart' ? (
            <Button variant='contained' onClick={onRemove} size='small'>
              remove
            </Button>
          ) : (
            ''
          )}
        </CardActions>
      </Card>
    </>
  )
}

export default Artworks
