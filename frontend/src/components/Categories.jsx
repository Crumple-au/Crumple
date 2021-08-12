import React from 'react'
import { Link } from 'react-router-dom'
// import SearchBar from './SearchBar'
import Alert from './Alert'
import Preloader from './Preloader'
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
  const { element, loading, error } = useFetch('/api/categories')
  const classes = useStyles()

  return (
    <>
      {/* <SearchBar /> */}

      {loading ? (
        <>
          <Preloader />
        </>
      ) : error ? (
        <Alert variant='danger'>{error}</Alert>
      ) : (
        <Box m='4rem 2rem 2rem 2rem'>
          <Grid
            container
            spacing={1}
            justifyContent='center'
            alignItems='center'
          >
            {element.map((category) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  align='center'
                  key={category._id}
                >
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
                        <Typography
                          id='category'
                          data-testid='category'
                          align='center'
                        >
                          {category.name}
                        </Typography>
                        <Typography align='center' color='textSecondary'>
                          {category.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>

                    <CardActions>
                      <Link to={`/category/${category._id}`}>
                        <Button size='small'>Explore</Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Box>
      )}
    </>
  )
}

export default Categories
