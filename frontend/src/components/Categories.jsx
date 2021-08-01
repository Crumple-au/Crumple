import React from 'react'
import SearchBar from './SearchBar'
import {
  Box,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core'

import { useStyles } from '../utils/theme'
import { useFetch } from '../utils/helpers'

const Categories = () => {
  const { categories } = useFetch('api/categories')
  const classes = useStyles()

  return (
    <>
      <SearchBar />

      <Box m='4rem 2rem 2rem 2rem'>
        <Grid container spacing={1} justifyContent='center' alignItems='center'>
          {categories.map((category) => {
            return (
              <Grid item xs={12} sm={6} md={3} align='center' key={category.id}>
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
                          src={category.image}
                          alt={category.altName}
                          height='100px'
                          width='100px'
                        />
                      </Box>
                    </CardMedia>
                    <CardContent>
                      <Typography align='center'>{category.name}</Typography>
                      <Typography align='center' color='textSecondary'>
                        {category.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size='small'>Explore</Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </>
  )
}

export default Categories
