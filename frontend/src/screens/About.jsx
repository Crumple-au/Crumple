import React from 'react'
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
} from '@material-ui/core'

import stick1 from '../images/crumple-stick1.jpg'
import scribbles1 from '../images/scribbles1.svg'
import scribbles2 from '../images/scribbles2.svg'
import scribbles3 from '../images/scribbles3.svg'
import { primary, secondary, grey } from '../utils/theme'

const About = () => {
  return (
    <>
      <Box
        m='2rem 2rem 2rem 2rem'
        // display='flex'
        // flexDirection='column'
        // justifyContent='center'
        // alignItems='center'
      >
        <Typography align='center' gutterBottom variant='h3'>
          <span style={{ color: secondary }}>how</span> it works
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3} align='center'></Grid>
          <Grid item xs={12} sm={4} md={2} lg={2} xl={2} align='center'>
            <Card>
              <Box display='flex' justifyContent='center' border={3}>
                <img
                  src={scribbles1}
                  alt='scribbles1'
                  height='100%'
                  width='100%'
                  style={{ objectFit: 'fill', background: primary }}
                />
              </Box>
              <CardContent>
                <Typography color='textSecondary'>
                  create your home on the web. make it your own.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={2} lg={2} xl={2} align='center'>
            <Card>
              <Box display='flex' justifyContent='center' border={3}>
                <img
                  src={scribbles2}
                  alt='scribbles1'
                  height='100%'
                  width='100%'
                  style={{ objectFit: 'fill', background: grey }}
                />
              </Box>
              <CardContent>
                <Typography color='textSecondary'>
                  upload your masterpiece and start selling
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={2} lg={2} xl={2} align='center'>
            <Card>
              <Box display='flex' justifyContent='center' border={3}>
                <img
                  src={scribbles3}
                  alt='scribbles1'
                  height='100%'
                  width='100%'
                  style={{ objectFit: 'fill', background: secondary }}
                />
              </Box>
              <CardContent>
                <Typography color='textSecondary'>
                  spread the word, earn and grow your presence.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3} align='center'></Grid>
        </Grid>

        {/* === */}
        <Box>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={12}
              md={1}
              // lg={1}
              xl={2}
              align='center'
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              // lg={6}
              xl={5}
              align='center'
            >
              <Box marginTop='4rem'>
                <Typography align='center' gutterBottom variant='h3'>
                  we believe in the{' '}
                  <span style={{ color: secondary }}>artist</span>
                </Typography>
                <Typography color='textSecondary'>
                  We empower artists and creatives to make a living doing what
                  they love with our simple and easy-to-use platform.{' '}
                  <span style={{ color: primary }}>crumple is 100% free</span>.
                  We connect makers with customers looking for something
                  extraordinary.
                </Typography>
                <Box paddingTop='2rem'>
                  <Typography color='textSecondary'>Got a question?</Typography>
                </Box>
                <Box m='0.5rem'>
                  <Button variant='contained' color='primary'>
                    Contact us
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              // lg={3}
              xl={3}
              align='center'
            >
              <img src={stick1} alt='stickman' height='auto' width='340' />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={2}
              // lg={2}
              xl={2}
              align='center'
            ></Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default About
