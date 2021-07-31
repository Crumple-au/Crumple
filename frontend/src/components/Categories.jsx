import React, { useState } from 'react'
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
import { data } from '../data/categories'

const Categories = () => {
  const classes = useStyles()
  const [categories, setCategories] = useState(data)

  return (
    <>
      <SearchBar />

      <Box m='2rem'>
        <Grid container spacing={0} justifyContent='center'>
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
                        {category.image}
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
