import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios'
import ENV_URL from '../config.js'

const usePostUpload = (refresh, croppedImage) => {

    const [imageURL, setImageURL] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    useEffect(() => {

        const uploadHandler = async () => {
            try{
                const formData = new FormData();
                formData.append("image", croppedImage );

                const {data} = await axios.post(ENV_URL + '/api/images/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${userInfo.token}`
                    }
                });
                setImageURL( await axios.get(`${ENV_URL}/api/images/${data}`) )
            } catch(error) {
                console.error(error)
            }
        };
        
        uploadHandler();

    }, [refresh, croppedImage, userInfo.token])

    return { imageURL }
}

export default usePostUpload;