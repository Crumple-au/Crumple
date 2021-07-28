import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser } from '../actions/userActions';

function ProfilePage() {
    const { userId } = useParams();
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [isAdmin, setIsAdmin] = useState('');
    // const [isSeller, setIsSeller] = useState();


    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
            dispatch(detailsUser(userId));
        }
    }, [dispatch, user ]);
    return (
        <div>
            {user && (
                <>
                    <h1>{user.name }'s Profile page</h1>
                    <h1>{user.email }</h1>
                    <h1>Admin: {String(user.isAdmin) }</h1>
                    <h1>Seller: {String(user.isSeller) }</h1>     
                    <p>{user.description}</p> 
                </>
            )}
        </div>
    )
}

export default ProfilePage
