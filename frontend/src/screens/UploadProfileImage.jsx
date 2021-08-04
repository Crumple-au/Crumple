import React, {useState, useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../actions/userActions';
import { useParams } from 'react-router-dom'
import Axios from "axios";
import Alert from '../components/Alert'
import Preloader from '../components/Preloader'
import ENV_URL from '../config.js'
import Cropper from 'react-easy-crop'
import Slider from '@material-ui/core/Slider'
import getCroppedImg from '../utils/cropImage';


function UploadProfileImage() {

    const {userId} = useParams();

    const [file, setFile] = useState({})
    const [images, setImages] = useState('');
    const [croppedImage, setCropppedImage] = useState({});
    const [preview, setPreview] = useState('');
    const [loadingUpload, setLoadingUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');
    const [crop, setCrop] = useState({ x: 100, y: 100 })
    const [zoom, setZoom] = useState(1)

    const userUpdateProfile  = useSelector((state) => state.userUpdateProfile );
    const { 
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate 
    } = userUpdateProfile;
    
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const dispatch = useDispatch();

    const onCropComplete = useCallback( async( croppedArea, croppedAreaPixels) => {
        try {
            const cropImage = await getCroppedImg(preview, croppedAreaPixels);
            // console.log('CROPIMAGE: ', cropImage)
            setCropppedImage(cropImage)
        } catch (e) {
            console.log(e)
        }
    }, [images, preview]);

    const postImageHandler = async(event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("image", croppedImage );
        const {data} = await Axios.post(ENV_URL + '/api/images/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${userInfo.token}`
            }
        });
        getImage(data)
    };

    const getImage = async(key) => {

        const {data} = await Axios.get(`${ENV_URL}/api/images/${key}`);
        setImages(data)
        // console.log('IMAGES: ', images) 
    }; 

    const fileSelected = event => {
        event.preventDefault()
        const file = event.target.files[0];
        setPreview( URL.createObjectURL(event.target.files[0]) );
        setFile(file)
    };

    useEffect(() => {
        dispatch(
            updateUserProfile({
                userId: userId,
                images
            })
        );

    }, [images])

    return (
        <div className='image-upload'>
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

            <div className="image-cropper">
                <div className="crop-container" >
                    <Cropper
                    cropShape='round'
                    image={preview}
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 3}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                    />

                    <div className="controls">
                        <Slider
                            value={zoom}
                            min={1}
                            max={3}
                            step={0.1}
                            aria-labelledby="Zoom"
                            onChange={(e, zoom) => setZoom(zoom)}
                            classes={{ root: 'slider' }}
                            />
                    </div>
                </div>
            </div>

            <div className="resized-image">
                {images ? <img src={images} alt="S3 Image" height="200"></img> : <p>no image</p> }
            </div>
            

        </div>
    )
}

export default UploadProfileImage
