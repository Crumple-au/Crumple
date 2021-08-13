import React, { useState, useCallback, useEffect } from 'react'
import '../style/profile.scss'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserProfile } from '../actions/userActions'
import { useParams } from 'react-router-dom'
import Alert from '../components/Alert'
import Preloader from '../components/Preloader'
import Cropper from 'react-easy-crop'
import Slider from '@material-ui/core/Slider'
import getCroppedImg from '../utils/cropImage'
import usePostUpload from '../utils/usePostUpload'

function UploadModal(props) {
  const { userId } = useParams()

  const [croppedImage, setCropppedImage] = useState({})
  const [crop, setCrop] = useState({ x: 100, y: 100 })
  const [refresh, setRefresh] = useState(false)
  const [preview, setPreview] = useState('')
  const [zoom, setZoom] = useState(1)

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdateProfile

  const dispatch = useDispatch()

  const onCropComplete = useCallback(
    async (croppedArea, croppedAreaPixels) => {
      try {
        const cropImage = await getCroppedImg(preview, croppedAreaPixels)
        setCropppedImage(cropImage)
      } catch (e) {
        console.error(e)
      }
    },
    [preview]
  )

  const { imageURL } = usePostUpload(refresh, croppedImage)

  const submitHandler = (event) => {
    event.preventDefault()
    setRefresh(true)
    if (imageURL.data) {
      dispatch(
        updateUserProfile({
          userId: userId,
          images: imageURL.data,
        })
      )
    } else {
      console.error(errorUpdate)
    }
  }

  const fileSelected = (event) => {
    event.preventDefault()
    setPreview(URL.createObjectURL(event.target.files[0]))
  }

  useEffect(() => {
    if (!props.show) {
      return null
    }
  }, [props.show])

  return (
    <div className='modal image-upload' onClick={props.onClose}>
      <form
        className='modal-content'
        onSubmit={submitHandler}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h4 className='modal-header'>Select profile photo</h4>
        </div>

        {loadingUpdate && <Preloader></Preloader>}
        {successUpdate && <Alert variant='success'>{successUpdate}</Alert>}
        {errorUpdate && <Alert variant='danger'>{errorUpdate}</Alert>}

        <div className='upload-form'>
          <label htmlFor='imageFile'>Upload Photo</label>
          <input
            style={{ visibility: 'hidden' }}
            type='file'
            id='imageFile'
            label='Upload Photo'
            accept='.jpg, .jpeg, .png, .gif'
            onChange={fileSelected}
          ></input>
        </div>

        <div className='modal-body image-cropper'>
          <div>
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
          </div>
        </div>

        <div className='modal-footer'>
          <div className='controls'>
            <Slider
              value={zoom}
              color='secondary'
              min={1}
              max={3}
              step={0.1}
              aria-labelledby='Zoom'
              onChange={(e, zoom) => setZoom(zoom)}
              classes={{ root: 'slider' }}
            />
          </div>
          <button type='submit'>Set as profile photo</button>
          <span>
            Your profile photo is visiable to everyone, across Crumple products
          </span>
        </div>
      </form>
    </div>
  )
}

export default UploadModal
