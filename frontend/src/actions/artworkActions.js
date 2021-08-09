import Axios from 'axios'
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
  ARTWORK_UPDATE_REQUEST,
  ARTWORK_UPDATE_SUCCESS,
  ARTWORK_UPDATE_FAIL,
  ARTWORK_DELETE_REQUEST,
  ARTWORK_DELETE_FAIL,
  ARTWORK_DELETE_SUCCESS,
} from '../constants/artworkConstants'
import ENV_URL from '../config.js'

const listArtworks =
  ({ seller = '' }) =>
  async (dispatch) => {
    dispatch({ type: ARTWORK_DETAILS_REQUEST })
    try {
      const { data } = await Axios.get(
        `${ENV_URL}/api/artworks?seller=${seller}`
      )
      dispatch({ type: ARTWORK_DETAILS_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: ARTWORK_DETAILS_FAIL, payload: error.message })
    }
};

const listArtworksAll = () => async (dispatch) => {
  dispatch({ type: ARTWORK_LIST_REQUEST })
  try {
    const { data } = await Axios.get(`${ENV_URL}/api/artworks/`)
    dispatch({ type: ARTWORK_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: ARTWORK_LIST_FAIL, payload: error.message })
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
  dispatch({ type: ARTWORK_DELETE_REQUEST, payload: artworkId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
      Axios.delete(`/api/artworks/${artworkId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
    dispatch({ type: ARTWORK_DELETE_SUCCESS });
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
        console.log(data)
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

export { listArtworks, listArtworksAll, createArtwork, updateArtwork, deleteArtwork, detailsArtwork}
