import Axios from 'axios'
import {
  ARTWORK_DETAILS_REQUEST,
  ARTWORK_DETAILS_SUCCESS,
  ARTWORK_DETAILS_FAIL,
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
  }

const listArtworksAll = () => async (dispatch) => {
  dispatch({ type: ARTWORK_DETAILS_REQUEST })
  try {
    const { data } = await Axios.get(`${ENV_URL}/api/artworks`)
    dispatch({ type: ARTWORK_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: ARTWORK_DETAILS_FAIL, payload: error.message })
  }
}

// const detailsArtwork = (artworkId) => async (dispatch) => {
//     dispatch({ type: ARTWORK_DETAILS_REQUEST, payload: artworkId });
//     try {
//         const { data } = await Axios.get(`${ENV_URL}/api/artworks/${artworkId}`);
//         dispatch({ type: ARTWORK_DETAILS_SUCCESS, payload: data });
//     } catch (error) {
//         dispatch({
//             type: ARTWORK_DETAILS_FAIL,
//             payload:
//             error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message,
//         });
//     }
// };

export { listArtworks, listArtworksAll }
