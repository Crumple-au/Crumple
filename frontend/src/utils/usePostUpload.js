import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../actions/userActions';
import axios from 'axios'
import ENV_URL from '../config.js'

const usePostUpload = (refresh, croppedImage) => {

    const [imageURL, setImageURL] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    useEffect(() => {

        const uploadHandler = async () => {
            const formData = new FormData();
            formData.append("image", croppedImage );

            const {data} = await axios.post(ENV_URL + '/api/images/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${userInfo.token}`
                }
            });
            setImageURL( await axios.get(`${ENV_URL}/api/images/${data}`) )
        };
        
        uploadHandler();

    }, [refresh, croppedImage])

    return { imageURL }
}

export default usePostUpload;