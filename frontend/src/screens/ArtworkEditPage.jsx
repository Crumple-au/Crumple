import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { createArtwork } from '../actions/artworkActions';
import { ARTWORK_CREATE_RESET } from '../constants/artworkConstants';
import Preloader from '../components/Preloader';
import Alert from '../components/Alert';
import { Button } from '@material-ui/core'

import '../style/profile.scss'
import UploadArtworkImage from '../components/UploadArtworkImage';

function ArtworkEditPage(props) {

    const {userId} = useParams();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    // const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [inStock, setInStock] = useState('');
    const [show, setShow] = useState(false)
    const [artworkImage, setArtworkImage] = useState('')

    const artworkCreate = useSelector((state) => state.artworkCreate);
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        artwork: createdArtwork } = artworkCreate;

    const dispatch = useDispatch();

    const createHandler = (e) => {
        e.preventDefault();
        // TODO: dispatch update product
        dispatch(
            createArtwork({
                seller: userId,
                name,
                price,
                image: artworkImage,
                category,
                description,
                inStock
            })
        );
    };

    useEffect(() => {

        if (successCreate) {
            dispatch({ type: ARTWORK_CREATE_RESET });
            props.history.push(`/profile/${userId}/`);
        } 
        if (createdArtwork) {
            setName(createdArtwork.name);
            setPrice(createdArtwork.price);
            setCategory(createdArtwork.category);
            setDescription(createdArtwork.description);
            setInStock(createdArtwork.inStock)
        }
    }, [dispatch, createdArtwork, successCreate, artworkImage, props.history, userId]);


    return (
        <div className='main' style={{height: '100vh'}}>
            <Button  onClick={() => setShow(true)} >Select artwork Picture</Button>
            {show && <UploadArtworkImage setArtworkImage={setArtworkImage} onClose={() => setShow(false)}  /> }
            <form className="profile-form" onSubmit={createHandler}>
                <ul className='form-container'>
                    <div className="form-heading">
                        <h1>Upload Artwork</h1>
                    </div>

                    {loadingCreate ? (
                        <Preloader/>
                    ) : errorCreate ? (
                    <Alert variant="alert alert-danger">{errorCreate}</Alert>
                    ) : (
                    <div className='form-fields'>
                        {artworkImage && 
                            <img src={artworkImage} alt="artwork" height="100"></img>
                        }

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

                        <button className="primary" type="submit">
                            Create
                        </button>

                    </div>
                    )}
                </ul>
            </form>
        </div>
    )
}

export default ArtworkEditPage
