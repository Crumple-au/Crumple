import React from 'react'
import SearchBar from './SearchBar'
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core'
import { FaPaintBrush } from 'react-icons/fa'

import { useStyles } from '../utils/theme'

const Categories = () => {
  const classes = useStyles()

  return (
    <>
      <SearchBar />
      <Box m='2rem'>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia>
              <Box display='flex' justifyContent='center' p='1rem' border={3}>
                <FaPaintBrush fontSize='10rem' />
              </Box>
            </CardMedia>
            <CardContent>
              <Typography align='center'>Drawing & Painting</Typography>
              <Typography align='center' color='textSecondary'>
                Art finds
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small'>Explore</Button>
          </CardActions>
        </Card>

        <Typography>Design & Tech</Typography>
        <Typography>Merchandise</Typography>
        <Typography>Books & Writing</Typography>
        <Typography>Photography</Typography>
        <Typography>Film & Video</Typography>
        <Typography>Music & Sound Design</Typography>
        <Typography>Crafts & DIY</Typography>
      </Box>
    </>
  )
}

export default Categories
