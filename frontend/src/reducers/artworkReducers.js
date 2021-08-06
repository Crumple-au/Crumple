import {
  ARTWORK_DETAILS_REQUEST,
  ARTWORK_DETAILS_SUCCESS,
  ARTWORK_DETAILS_FAIL,
} from '../constants/artworkConstants'

import {
  ARTWORK_LIST_REQUEST,
  ARTWORK_LIST_SUCCESS,
  ARTWORK_LIST_FAIL,
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

// const artworksAllReducer = (state = { loading: true }, action) => {
//   switch (action.type) {
//     case ARTWORK_DETAILS_REQUEST:
//       return { loading: true }
//     case ARTWORK_DETAILS_SUCCESS:
//       return { loading: false, artwork: action.payload }
//     case ARTWORK_DETAILS_FAIL:
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }
// }

const artworkListReducer = (
  state = { loading: true, artworks: [] },
  action
) => {
  switch (action.type) {
    case ARTWORK_LIST_REQUEST:
      return { loading: true }
    case ARTWORK_LIST_SUCCESS:
      return { loading: false, artworks: action.payload }
    case ARTWORK_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export { productListReducer, artworkListReducer }
