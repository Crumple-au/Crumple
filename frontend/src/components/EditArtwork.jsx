import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateArtwork, detailsArtwork } from '../actions/artworkActions';
import { ARTWORK_DELETE_RESET, ARTWORK_UPDATE_RESET } from '../constants/artworkConstants';
import Alert from '../components/Alert';
import Preloader from '../components/Preloader';
import UploadArtworkImage from '../components/UploadArtworkImage';
import { Button } from '@material-ui/core';
import '../style/profile.scss';

function EditArtwork() {

    const {artworkId} = useParams();
    const history = useHistory()

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    // const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [inStock, setInStock] = useState('');
    const [show, setShow] = useState(false)
    const [artworkImage, setArtworkImage] = useState('')

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const artworkDetails = useSelector((state) => state.artworkDetails);
    const { loading, error, artwork } = artworkDetails;

    const artworkUpdate = useSelector((state) => state.artworkUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate } = artworkUpdate;

    const dispatch = useDispatch();
console.log(artwork)
    const submitHandler = async(e) => {
        e.preventDefault();
        console.log(artwork)
        dispatch(
            updateArtwork({
                _id: artwork._id,
                seller: userInfo._id,
                name,
                price,
                inStock,
                category,
                description,
                image: artworkImage,
            })
        );
    };

    useEffect(() => {
        if (successUpdate) {
            history.replace(`/artwork/${artworkId}`)
          }
        if (!artwork || artwork._id !== artworkId || successUpdate) {
            dispatch({ type: ARTWORK_UPDATE_RESET });
            dispatch(detailsArtwork(artworkId));
        } else {
            setName(artwork.name);
            setPrice(artwork.price);
            setArtworkImage(artwork.image);
            setCategory(artwork.category);
            setInStock(artwork.inStock);
            setDescription(artwork.description);
        }
    }, [dispatch, artwork, successUpdate, history, artworkId]);

    return (
        userInfo && userInfo._id ? (
            <>
                <div className='main' >
                    <Button onClick={() => setShow(true)} >Update Artwork Picture</Button>
                    {show && <UploadArtworkImage setArtworkImage={setArtworkImage} onClose={() => setShow(false)}  /> }

                    <form className="card card-body" onSubmit={submitHandler}>
                        <ul className='form-container'>
                            <div className="form-heading">
                                <h2 className="card-title">Edit your <span>details</span></h2>
                            </div>

                            {artworkImage && 
                            <img src={artworkImage} alt="artwork" height="100"></img>
                            }

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
                                <label htmlFor="price">Price</label>
                                <input
                                    id="price"
                                    type="number"
                                    placeholder="Enter price"
                                    value={price}
                                    required
                                    onChange={(e) => setPrice(e.target.value)}
                                ></input>
                            </li>

                            <li>
                                <label htmlFor="category">Category</label>
                                <select
                                    id="category"
                                    value={category}
                                    required
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="">Select</option>
                                    <option value="Drawing and Painting">Drawing and Painting</option>
                                    <option value="Design and Tech">Design and Tech</option>
                                    <option value="Merchandise">Merchandise</option>
                                    <option value="Books and Writing">Books and Writing</option>
                                    <option value="Photography">Photography</option>
                                    <option value="Film and Video">Film and Video</option>
                                    <option value="Music and Sound Design">Music and Sound Design</option>
                                    <option value="Crafts and DIY">Crafts and DIY</option>
                                </select>
                            </li>

                            <li>
                                <label htmlFor="countInStock">Count In Stock</label>
                                <input
                                    id="countInStock"
                                    type="number"
                                    placeholder="Enter countInStock"
                                    value={inStock}
                                    required
                                    onChange={(e) => setInStock(e.target.value)}
                                ></input>
                            </li>

                            <li>
                                <label htmlFor="description">Description</label>
                                <textarea
                                    id="description"
                                    rows="3"
                                    type="text"
                                    placeholder="Enter description"
                                    value={description}
                                    required
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

export default EditArtwork
