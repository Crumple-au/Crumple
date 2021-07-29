import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Redirect  } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile, detailsUser } from '../actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

function EditProfilePage(props) {
    const {userId} = useParams();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [isSeller, setIsSeller] = useState(false);

    // const userSignin = useSelector((state) => state.userSignin);
    // const { userInfo } = userSignin;

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
    const userUpdateProfile  = useSelector((state) => state.userUpdateProfile );
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = userUpdateProfile ;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch update profile
        dispatch(
            updateUserProfile({
                userId: userId,
                name,
                email,
                description,
                isSeller
            })
        );

    };

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: USER_UPDATE_PROFILE_RESET });
            props.history.push(`/profile/${userId}`);
        }
        if (!user) {
            dispatch(detailsUser(userId));
        } else {
            setName(user.name);
            setEmail(user.email);
            setDescription(user.description)
            setIsSeller(user.isSeller);
        }
    }, [dispatch, user, successUpdate]);

    return (
        <div className='form'>
            <form onSubmit={submitHandler}>
                <ul className='form-container'>

                    <div className="form-heading">
                        <h1>Edit User {user.name}</h1>
                    </div>

                    <div className="alert-box">
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                    </div>

                    <div className="form-fields">
                        <li>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                ></input>
                        </li>
                        <li>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                ></input>
                        </li>
                        <li>
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                type="text"
                                placeholder="Enter your description"
                                value={description}
                                maxLength="140"
                                style={{"resize": "none", "width": "100%", "height": "10rem"}}
                                onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                        </li>
                        {/* <li>
                            <label htmlFor="isSeller">Is Seller</label>
                            <input
                                id="isSeller"
                                type="checkbox"
                                checked={isSeller}
                                onChange={(e) => setIsSeller(e.target.checked)}
                                ></input>
                        </li> */}
                        <li>
                            <button type="submit" className="primary">
                                Update
                            </button>
                        </li>
                    </div>
                </ul>
            </form>
        </div>
    );
}
export default EditProfilePage;