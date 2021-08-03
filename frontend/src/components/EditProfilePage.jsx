import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile, detailsUser } from '../actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';
import Alert from '../components/Alert'
import Preloader from '../components/Preloader'
import ENV_URL from '../config.js'


function EditProfilePage(props) {
    const {userId} = useParams();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('')
    const [images, setImages] = useState([]);
    const [loadingUpload, setLoadingUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');
console.log(images)
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const userDetails = useSelector((state) => state.userDetails);
    const { user } = userDetails;

    const userUpdateProfile  = useSelector((state) => state.userUpdateProfile );
    const { 
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate } = userUpdateProfile ;

    const dispatch = useDispatch();

    const submitHandler = async(e) => {
        e.preventDefault();
        // dispatch update profile
        const result = await postImage({image: file});
        setImages([result.imagePath]);
        console.log('images:', images);
        console.log('result.imagePath:', result.imagePath);

        dispatch(
            updateUserProfile({
                userId: userId,
                name,
                email,
                description
            })
        );
    };

    async function postImage({image}) {
        const formData = new FormData();
        formData.append("image", image)
    
        const result = await Axios.post(ENV_URL + '/api/images', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${userInfo.token}`,
            }
        });
        return result.data
    }

    const fileSelected = event => {
        event.preventDefault()
        const file = event.target.files[0]
        setFile(file)
    }

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
        <div className='main'>
            <form onSubmit={submitHandler}>
                <ul className='form-container'>

                    <div className="form-heading">
                        <h1>Edit {name}</h1>
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
                        <li>
                            <label htmlFor="imageFile">Image File</label>
                            <input
                                type="file"
                                id="imageFile"
                                label="Choose Image"
                                onChange={fileSelected}
                            ></input>
                            {loadingUpload && <Preloader></Preloader>}
                            {errorUpload && (
                                <Alert variant="danger">{errorUpload}</Alert>
                            )}
                        </li>
                        <li>
                            <button type="submit" className="primary">
                                Update
                            </button>
                        </li>
                    </div>
                </ul>
            </form>
            {/* { images.map( image => (
                <div key={image.pathName}>
                    <img src={image.pathName}></img>
                </div>
            ))} */}
            <img src=" /images/c423e81879921c6e61a67a41e80cf3b6" alt="s3 image"></img>
        </div>
    );
}
export default EditProfilePage;