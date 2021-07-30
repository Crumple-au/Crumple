import React, { useEffect } from 'react';
import { useParams, NavLink, BrowserRouter, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser } from '../actions/userActions';
import Profile from '../components/Profile'
import Product from '../components/Product'
import Payments from '../components/Payments';
import Settings from '../components/Settings';

function ProfilePage() {
    const { userId } = useParams();

    // const userSignin = useSelector((state) => state.userSignin);
    // const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
            dispatch(detailsUser(userId));
        }

    }, [dispatch, user ]);
    return (
        <BrowserRouter>
            <div className="profile-container">
                <nav className="sidebar">
                    <NavLink activeClassName="selected" to={`/profile/${userId}`} >Profile</NavLink>
                    <NavLink activeClassName="selected" to={`/profile/${userId}/products`} >Products</NavLink>
                    <NavLink activeClassName="selected" to={`/profile/${userId}/payments`} >Payments</NavLink>
                    <NavLink activeClassName="selected" to={`/profile/${userId}/settings`} >Settings</NavLink>
                    <NavLink activeClassName="selected" to={`/profile/${userId}/faq`} >FAQ</NavLink>
                </nav>

                {loading ? 
                    <>
                        <h1>loading...</h1>
                    </>
                : error ?
                    <>
                        {error.message}
                    </>
                :
                    <Switch>
                        <Route path='/profile/:userId/products'>
                            <Product/>
                        </Route>
                        <Route path='/profile/:userId/payments'>
                            <Payments />
                        </Route>
                        <Route path='/profile/:userId/settings'>
                            <Settings />
                        </Route>
                        <Route path='/profile/:userId'>
                            <Profile 
                                user={user}
                                />
                        </Route>
                    </Switch>
                }   

            </div>
        </BrowserRouter>
    )
}

export default ProfilePage
