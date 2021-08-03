import Axios from 'axios';
import {
    CART_ADD_ITEM,
    CART_ADD_ITEM_FAIL,
    CART_REMOVE_ITEM,
} from '../constants/cartConstants';

const addToCart = (artworkId, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/artworks/${artworkId}`);
    const { cart: { cartItems } } = getState();
    if (cartItems.length > 0 && data.seller._id !== cartItems[0].seller._id) {
        dispatch({ 
            type: CART_ADD_ITEM_FAIL,
            payload: `Can't Add To Cart.`,
        });
    } else {
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
            name: data.name,
            price: data.price,
            countInStock: data.countInStock,
            _id: data._id,
            seller: data.seller,
            qty,
        },
    });
        localStorage.setItem(
            'cartItems',
            JSON.stringify(getState().cart.cartItems)
        );
    }
};

const removeFromCart = (artworkId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: artworkId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export { addToCart, removeFromCart }