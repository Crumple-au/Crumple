import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from "axios";
import Alert from '../components/Alert'
import Preloader from '../components/Preloader'
import ENV_URL from '../config.js'

function UploadProfileImage() {

    const [file, setFile] = useState('')
    const [images, setImages] = useState('');
    const [loadingUpload, setLoadingUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    async function postImageHandler(event) {
        event.preventDefault()

        const formData = new FormData();
        formData.append("image", file)
    
        const {data} = await Axios.post(ENV_URL + '/api/images/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${userInfo.token}`,
            }
        });
        getImage(data)
    }

    const getImage = async(key) => {

        const {data} = await Axios.get(`${ENV_URL}/api/images/${key}`);
        setImages(data)
        console.log('IMAGES: ', images)
    }

    const fileSelected = event => {
        event.preventDefault()
        const file = event.target.files[0]
        setFile(file)
    }

    return (
        <>
            <form onSubmit={postImageHandler}>
                <div>
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
                </div>
                <button type="submit" className="primary">
                    Update
                </button>
            </form>

            <img src={images} alt="S3 Image"></img>
        </>
    )
}

export default UploadProfileImage
