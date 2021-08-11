import React, { useState, useEffect } from 'react';
import '../style/profile.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile, detailsUser } from '../actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';
import Alert from '../components/Alert'
import Preloader from '../components/Preloader'
import UploadModal from '../components/UploadModal'
import { Button } from '@material-ui/core'


function EditProfilePage(props) {
    const {userId} = useParams();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [show, setShow] = useState(false)

    const userDetails = useSelector((state) => state.userDetails);
    const { user } = userDetails;

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const userUpdateProfile  = useSelector((state) => state.userUpdateProfile );
    const { 
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate } = userUpdateProfile ;

    const dispatch = useDispatch();

    const submitHandler = async(e) => {
        e.preventDefault();
        
        dispatch(
            updateUserProfile({
                userId: userId,
                name,
                email,
                description
            })
        );

    };

    useEffect(() => {
        if (successUpdate) {            
            dispatch({ type: USER_UPDATE_PROFILE_RESET });
            dispatch(detailsUser(userId));
        }
        
        if (!user) {
            dispatch(detailsUser(userId));
        } else {
            setName(user.name);
            setEmail(user.email);
            setDescription(user.description);
        }
    }, [dispatch, user, successUpdate, errorUpdate, props.history, userId]);


    return (
        !userInfo && !userInfo._id ? (
            <>
                <div className='main' style={{height: '100vh'}}>
                    <Button onClick={() => setShow(true)} >Update Profile Picture</Button>
                    {show && <UploadModal onClose={() => setShow(false)}  /> }

                    <form className="profile-form" onSubmit={submitHandler}>
                        <ul className='form-container'>
                            <div className="form-heading">
                                <h2>Edit your details</h2>
                            </div>


                            {loadingUpdate && <Preloader/>}
                            {successUpdate && <Alert variant="success">User Updated Succussfully</Alert>}
                            {errorUpdate && <Alert variant="danger">{errorUpdate}</Alert>}

                            <div className="form-fields">

                                <li>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter name"
                                        value={name}
                                        required
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
                                        required
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
                                        required
                                        style={{"resize": "none", "width": "100%", "height": "10rem"}}
                                        onChange={(e) => setDescription(e.target.value)}
                                        ></textarea>
                                </li>
                                <button type="submit" className="primary">
                                    Update
                                </button>
                            </div>
                        </ul>
                    </form>
                </div>
            </>
            ) : (
                <h1 className="card-title">Sorry but you do not have access to this page :/</h1>
            )
    );
}
export default EditProfilePage;