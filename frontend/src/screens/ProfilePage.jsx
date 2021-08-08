import React, { useEffect } from 'react'
import '../style/profile.scss'
import {
  useParams,
  NavLink,
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser } from '../actions/userActions'
import { listArtworks } from '../actions/artworkActions'
// import Profile from '../components/Profile'
import Artworks from '../components/Artworks'
import Payments from '../components/Payments'
import EditProfilePage from '../components/EditProfilePage'
import Alert from '../components/Alert'
import Preloader from '../components/Preloader'
import ProfileArtworksPage from './ProfileArtworksPage'
import Chip from '@material-ui/core/Chip';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';


function ProfilePage() {
  const { userId } = useParams()

  const artworkList = useSelector((state) => state.artworkList)
  const {  artworks } = artworkList

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const dispatch = useDispatch()

  useEffect(() => {
    if (!user) {
      dispatch(detailsUser(userId))
      dispatch(listArtworks({ seller: userId }))
    }
  }, [dispatch, user, userId])

  return (
    <BrowserRouter>
    <div className="profile-container">
      <aside className="sidebar">

        <div className="heading">
          {user ?
            <>
              <img  src={user.image} alt="profile"></img>
              <div className="user-name">
                <h1>{user.name}</h1>
                  {user.isAdmin ? 
                      <Chip 
                          label="admin"
                          color="primary"
                          className="admin-badge"
                      /> 
                      : ''}
              </div>
            </>  
          : <Preloader/>}  
        </div>
        <div className="sidebar-links">
          <div className="ul">
            <div className="li">
                <CameraAltOutlinedIcon style={{color: 'ivory'}} />
                <NavLink className="link" exact activeClassName="selected" to={`/profile/${userId}/`} >
                Artworks
              </NavLink>
            </div>
            <div className="li">
                <PaymentOutlinedIcon style={{color: 'ivory'}}/>
              <NavLink className="link" activeClassName="selected"  to={`/profile/${userId}/payments`} >
                Payments
              </NavLink>
            </div>
            <div className="li">
              <EditOutlinedIcon style={{color: 'ivory'}}/>
              <NavLink className="link" activeClassName="selected" to={`/profile/${userId}/settings`} >
                Edit
              </NavLink>
            </div>
            <div className="li">
              <LiveHelpOutlinedIcon style={{color: 'ivory'}}/>
              <NavLink className="link" activeClassName="selected"  to={`/profile/${userId}/faq`} >
                FAQ
              </NavLink>
            </div>
          </div>
          
          <div className="sidebar-footer">
            <p>Having troubles?</p>
            <p>Contact us</p>
          </div>
        </div>
      </aside>

    
      <main>
        {loading ? (
          <Preloader/>
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : (

          <Switch>
            <Route path='/profile/:userId/payments'>
              <Payments />
            </Route>
            <Route path='/profile/:userId/settings'>
              <EditProfilePage />
            </Route>
            <Route path='/profile/:userId/'>
              <ProfileArtworksPage user={user} artworks={artworks} />
            </Route>
          </Switch>
        )}
      </main>
      

    </div>
    </BrowserRouter>
    // <BrowserRouter>
    //   <div className='profile-container'>
    //     <aside className='sidebar'>

          
    //       <NavLink activeClassName='selected' to={`/profile/${userId}`}>
    //         Profile
    //       </NavLink>
    //       <NavLink
    //         activeClassName='selected'
    //         to={`/profile/${userId}/artworks`}
    //       >
    //         Artworks
    //       </NavLink>
    //       <NavLink
    //         activeClassName='selected'
    //         to={`/profile/${userId}/payments`}
    //       >
    //         Payments
    //       </NavLink>
    //       <NavLink
    //         activeClassName='selected'
    //         to={`/profile/${userId}/settings`}
    //       >
    //         Settings
    //       </NavLink>
    //       <NavLink activeClassName='selected' to={`/profile/${userId}/faq`}>
    //         FAQ
    //       </NavLink>
    //     </aside>

    //     {loading ? (
    //       <>
    //         <Preloader/>
    //       </>
    //     ) : error ? (
    //         <Alert variant="danger">{error}</Alert>
    //     ) : (
          
    //       <Switch>
    //         <Route path='/profile/:userId/artworks'>
    //           <Artworks user={user} artworks={artworks} />
    //         </Route>
    //         <Route path='/profile/:userId/payments'>
    //           <Payments />
    //         </Route>
    //         <Route path='/profile/:userId/settings'>
    //           <EditProfilePage />
    //         </Route>
    //         <Route path='/profile/:userId'>
    //           <Profile user={user} />
    //         </Route>
    //       </Switch>
    //     )}
    //   </div>
    // </BrowserRouter>
  )
}

export default ProfilePage
