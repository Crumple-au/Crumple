import {
    ARTWORK_DETAILS_REQUEST,
    ARTWORK_DETAILS_SUCCESS,
    ARTWORK_DETAILS_FAIL
} from '../constants/artworkConstants';

const productListReducer = ( state = { loading: true, products: [] }, action ) => {
    switch (action.type) {
        case ARTWORK_DETAILS_REQUEST:
            return { loading: true };
        case ARTWORK_DETAILS_SUCCESS:
            return { loading: false, artworks: action.payload.artworks };
        case ARTWORK_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

const artworkDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case ARTWORK_DETAILS_REQUEST:
            return { loading: true };
        case ARTWORK_DETAILS_SUCCESS:
            return { loading: false, artwork: action.payload };
        case ARTWORK_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export {productListReducer}