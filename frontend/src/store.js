import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {
  userSigninReducer,
  userRegisterReducer,
  userDetailsReducer,
  userListReducer,
  userUpdateProfileReducer,
  userDeleteReducer,
} from './reducers/userReducers';
import {
  productListReducer,
  artworkListReducer,
  artworkCreateReducer,
  artworkUpdateReducer,
  artworkDeleteReducer,
  artworksDetailsReducer,
  artworkReviewCreateReducer
} from './reducers/artworkReducers';
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderDeliverReducer,
  orderMineListReducer
} from './reducers/orderReducers'
import { cartReducer } from './reducers/cartReducers';

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    paymentMethod: 'Paypal',
  },
}

const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userList: userListReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userDelete: userDeleteReducer,
  artworkList: productListReducer,
  artworkAll: artworkListReducer,
  artworkCreate: artworkCreateReducer,
  artworkUpdate: artworkUpdateReducer,
  artworkDelete: artworkDeleteReducer,
  artworkDetails: artworksDetailsReducer,
  artworkReviewCreate: artworkReviewCreateReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderMineList: orderMineListReducer
})

// the line below to be able to use Redux browser extention
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
)
export default store
