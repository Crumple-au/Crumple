import {
  ARTWORK_DETAILS_REQUEST,
  ARTWORK_DETAILS_SUCCESS,
  ARTWORK_DETAILS_FAIL,
  ARTWORK_LIST_REQUEST,
  ARTWORK_LIST_SUCCESS,
  ARTWORK_LIST_FAIL,
  ARTWORK_CREATE_REQUEST,
  ARTWORK_CREATE_SUCCESS,
  ARTWORK_CREATE_FAIL,
  ARTWORK_CREATE_RESET,
  ARTWORK_UPDATE_REQUEST,
  ARTWORK_UPDATE_SUCCESS,
  ARTWORK_UPDATE_FAIL,
  ARTWORK_UPDATE_RESET,
  ARTWORK_DELETE_REQUEST,
  ARTWORK_DELETE_SUCCESS,
  ARTWORK_DELETE_FAIL,
  ARTWORK_DELETE_RESET,
} from '../constants/artworkConstants'

const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case ARTWORK_DETAILS_REQUEST:
      return { loading: true }
    case ARTWORK_DETAILS_SUCCESS:
      return { loading: false, artworks: action.payload.artworks }
    case ARTWORK_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

const artworksDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case ARTWORK_DETAILS_REQUEST:
      return { loading: true }
    case ARTWORK_DETAILS_SUCCESS:
      return { loading: false, artwork: action.payload }
    case ARTWORK_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

const artworkListReducer = (
  state = { loading: true, artworks: [] },
  action
) => {
  switch (action.type) {
    case ARTWORK_LIST_REQUEST:
      return { loading: true }
    case ARTWORK_LIST_SUCCESS:
      return { loading: false, artworks: action.payload.artworks }
    case ARTWORK_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
};

const artworkCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ARTWORK_CREATE_REQUEST:
      return { loading: true };
    case ARTWORK_CREATE_SUCCESS:
      return { loading: false, success: true, artwork: action.payload };
    case ARTWORK_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case ARTWORK_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

const artworkUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ARTWORK_UPDATE_REQUEST:
      return { loading: true };
    case ARTWORK_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case ARTWORK_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ARTWORK_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

const artworkDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ARTWORK_DELETE_REQUEST:
      return { loading: true };
    case ARTWORK_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ARTWORK_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case ARTWORK_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export { productListReducer, artworkListReducer, artworkCreateReducer, artworkUpdateReducer, artworkDeleteReducer, artworksDetailsReducer }
