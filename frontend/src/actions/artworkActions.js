import Axios from 'axios'
import {
  ARTWORK_DETAILS_REQUEST,
  ARTWORK_DETAILS_SUCCESS,
  ARTWORK_DETAILS_FAIL,
  ARTWORK_LIST_REQUEST,
  ARTWORK_LIST_SUCCESS,
  ARTWORK_LIST_FAIL,
  ARTWORK_LISTALL_REQUEST,
  ARTWORK_LISTALL_SUCCESS,
  ARTWORK_LISTALL_FAIL,
  ARTWORK_CREATE_REQUEST,
  ARTWORK_CREATE_SUCCESS,
  ARTWORK_CREATE_FAIL,
  ARTWORK_UPDATE_REQUEST,
  ARTWORK_UPDATE_SUCCESS,
  ARTWORK_UPDATE_FAIL,
  ARTWORK_DELETE_REQUEST,
  ARTWORK_DELETE_FAIL,
  ARTWORK_DELETE_SUCCESS,
  ARTWORK_REVIEW_CREATE_REQUEST,
  ARTWORK_REVIEW_CREATE_SUCCESS,
  ARTWORK_REVIEW_CREATE_FAIL,
} from '../constants/artworkConstants'
import ENV_URL from '../config.js'

const listArtworks = ({ seller = '', category, order, price }) => async (dispatch) => {
    dispatch({ type: ARTWORK_LIST_REQUEST })
    try {
      // console.log('price:', price) 
      const { data } = await Axios.get(
        `${ENV_URL}/api/artworks?seller=${seller}&category=${category}&order=${order}&price=${price}`
      )
      console.log(data)
      dispatch({ type: ARTWORK_LIST_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: ARTWORK_LIST_FAIL, payload: error.message })
    }
};

const listArtworksAll = () => async (dispatch) => {
  dispatch({ type: ARTWORK_LISTALL_REQUEST })
  try {
    const { data } = await Axios.get(`${ENV_URL}/api/artworks/`)
    dispatch({ type: ARTWORK_LISTALL_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: ARTWORK_LISTALL_FAIL, payload: error.message })
  }
};

const createArtwork = (artwork) => async (dispatch, getState) => {
  dispatch({ type: ARTWORK_CREATE_REQUEST });
  const { userSignin: { userInfo } } = getState();
  try {
    console.log(artwork)
    const { data } = await Axios.post(
      '/api/artworks/', {artwork},
      { headers: { Authorization: `Bearer ${userInfo.token}` } }
    );
    dispatch({ type: ARTWORK_CREATE_SUCCESS, payload: data.artwork });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ARTWORK_CREATE_FAIL, payload: message });
  }
};

const updateArtwork = (artwork) => async (dispatch, getState) => {
  dispatch({ type: ARTWORK_UPDATE_REQUEST, payload: artwork });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/artworks/${artwork._id}`, artwork, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: ARTWORK_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ARTWORK_UPDATE_FAIL, error: message });
  }
};

const deleteArtwork = (artworkId) => async (dispatch, getState) => {
  dispatch({ type: ARTWORK_DELETE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
      const { data } = await Axios.delete(`/api/artworks/${artworkId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      console.log(data)
    dispatch({ type: ARTWORK_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ARTWORK_DELETE_FAIL, payload: message });
  }
};


const detailsArtwork = (artworkId) => async (dispatch) => {
    dispatch({ type: ARTWORK_DETAILS_REQUEST, payload: artworkId });
    try {
        const { data } = await Axios.get(`${ENV_URL}/api/artworks/${artworkId}`);
        dispatch({ type: ARTWORK_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: ARTWORK_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

const createReview = (artworkId, review) => async (dispatch, getState) => {
  dispatch({ type: ARTWORK_REVIEW_CREATE_REQUEST });
  const { userSignin: { userInfo } } = getState();
  try {
    const { data } = await Axios.post(`${ENV_URL}/api/artworks/${artworkId}/reviews`, review,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: ARTWORK_REVIEW_CREATE_SUCCESS, payload: data.review });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ARTWORK_REVIEW_CREATE_FAIL, payload: message });
  }
};

export { listArtworks, listArtworksAll, createArtwork, updateArtwork, deleteArtwork, detailsArtwork, createReview}
