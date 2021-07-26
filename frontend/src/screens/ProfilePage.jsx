import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ProfilePage(props) {

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    return (
        <div>
            <h1>{userInfo.name}'s Profile page</h1>
        </div>
    )
}

export default ProfilePage
