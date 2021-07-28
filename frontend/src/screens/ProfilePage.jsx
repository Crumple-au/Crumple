import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser } from '../actions/userActions';

function ProfilePage() {
    const { userId } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isAdmin, setIsAdmin] = useState('');
    const [isSeller, setIsSeller] = useState();


    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
            dispatch(detailsUser(userId));
        } else {
            setName(user.name);
            setEmail(user.email);
            setIsAdmin(String(user.isAdmin));
            setIsSeller(String(user.isSeller));
        }
    }, [dispatch, userInfo._id, userId, user]);

    return (
        <div>
            <h1>{name }'s Profile page</h1>
            <h1>{email }</h1>
            <h1>Admin: {isAdmin }</h1>
            <h1>Seller: {isSeller }</h1>
        </div>
    )
}

export default ProfilePage
