import React, { useState, useEffect } from 'react'
import '../style/profile.scss'
import {
  useParams,
  useLocation,
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser } from '../actions/userActions'
import Payments from '../components/Payments'
import EditProfilePage from '../components/EditProfilePage'
import Alert from '../components/Alert'
import Preloader from '../components/Preloader'
import ProfileArtworksPage from './ProfileArtworksPage'
import Chip from '@material-ui/core/Chip'
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined'
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import MenuIcon from '@material-ui/icons/Menu'
import ArtworkCreatePage from '../components/ArtworkCreatePage'
import ListUsersPage from './ListUsersPage';
import OrderHistoryPage from './OrderHistoryPage';
import {
  Box,
  Drawer,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  Toolbar,
  IconButton,
  Grid,
} from '@material-ui/core'
import { useStyles } from '../utils/theme'
import EditArtwork from '../components/EditArtwork'

function ProfilePage(props) {
  const { window } = props
  const classes = useStyles()
  const location = useLocation()
  const { userId } = useParams()
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const dispatch = useDispatch()

  useEffect(() => {
    if (!user) {
      dispatch(detailsUser(userId))
    }
  }, [dispatch, user, userId, pathname])

  const menuItems = [
    {
      text: 'Artworks',
      icon: <CameraAltOutlinedIcon />,
      path: `/profile/${userId}`,
    },
    {
      text: 'Payments',
      icon: <PaymentOutlinedIcon />,
      path: `/profile/${userId}/payments`,
    },
    {
      text: 'Edit',
      icon: <EditOutlinedIcon />,
      path: `/profile/${userId}/settings`,
    },
  ]

  const container =
    window !== undefined ? () => window().document.body : undefined

  const drawer = (
    <Box margin='8rem 1rem 0 1rem'>
      <div className={classes.toolbar}>
        {user ? (
          <>
            <img
              src={user.image}
              alt='profile'
              width='100px'
              height='100px'
              border='1px'
              style={{ borderRadius: '50%' }}
            />
            <Box display='flex' justifyContent='space-between'>
              <Typography variant='h5' className={classes.fontColor}>
                {user.name}
              </Typography>
              {user.isAdmin ? (
                <Chip label='admin' color='primary' className='admin-badge' />
              ) : (
                <Chip label='artist' color='default' className='admin-badge' />
              )}
            </Box>
          </>
        ) : (
          <Preloader />
        )}
      </div>
      <Box margin='1rem 0'>
        <Typography className={classes.fontColor}>
          {user && user.description}
        </Typography>
      </Box>
      <Divider className={classes.dividerColor} />
      <Box marginTop='2rem'>
        <List>
          {menuItems.map((item) => {
            return (
              <ListItem
                to={item.path}
                component={Link}
                key={item.text}
                className={
                  location.pathname === item.path ? classes.active : null
                }
              >
                <ListItemIcon className={classes.fontColor}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  className={classes.fontColor}
                />
              </ListItem>
            )
          })}
        </List>
      </Box>
      <Box className={classes.bottomPush}>
        <Divider className={classes.dividerColor} />
        <Box margin='1rem 0'>
          <Typography className={classes.fontColor}>Having trouble?</Typography>
          <Typography className={classes.fontColor}>Contact us.</Typography>
        </Box>
      </Box>
    </Box>
  )

  return (
      <>
        <div className={classes.drawerRoot }>
          <Box>
            <Toolbar>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='start'
                onClick={handleDrawerToggle}
                className={classes.menuButton}
                style={{ float: 'left',}}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Box>

          <nav className={classes.drawer}>
            <Hidden mdUp implementation='css'>
              <Drawer
                container={container}
                variant='temporary'
                anchor='left'
                classes={{ paper: classes.drawerPaper }}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden smDown implementation='css'>
              <Drawer
                className={classes.drawer}
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant='permanent'
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>

          <main className={classes.content}>
            <Grid
              container
              spacing={0}
              justifyContent='center'
              alignItems='center'
            >
              <Grid item xs={12} sm={12} md={2} lg={2} xl={2}></Grid>

              <Grid item xs={12} sm={12} md={10} lg={9} xl={10}>
                {loading ? (
                  <Preloader />
                ) : error ? (
                  <Alert variant='danger'>{error}</Alert>
                ) : (
                  <Switch>
                    <Route path='/profile/:userId/createArtwork'>
                      <ArtworkCreatePage />
                    </Route>
                    <Route path='/profile/:artworkId/editArtwork'>
                      <EditArtwork />
                    </Route>
                    <Route path='/profile/:userId/payments'>
                      <Payments />
                    </Route>
                    <Route path='/profile/:userId/settings'>
                      <EditProfilePage />
                    </Route>
                    <Route path='/profile/:userId/'>
                      <ProfileArtworksPage />
                    </Route>
                    <Route path='/orderHistory'>
                      <OrderHistoryPage/>
                    </Route>
                    <Route path='/allusers'>
                      <ListUsersPage/>
                    </Route>
                  </Switch>
                )}
              </Grid>
            </Grid>
          </main>
        </div>
      </>
  )
}

export default ProfilePage
