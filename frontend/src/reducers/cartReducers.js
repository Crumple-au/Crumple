import {
    CART_ADD_ITEM,
    CART_ADD_ITEM_FAIL,
    CART_EMPTY,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD
} from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x._id === item._id);
        if (existItem) {
            return {
                ...state,
                error: '',
                cartItems: state.cartItems.map((x) => 
                    x._id === existItem.artwork ? item : x
                )
            };
        } else {
            return { ...state, error: '', cartItems: [...state.cartItems, item] };
        }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                error: '',
                cartItems: state.cartItems.filter((x) => x._id !== action.payload)
            };
        case CART_ADD_ITEM_FAIL:
            return { ...state, error: action.payload };
        case CART_EMPTY:
            return { ...state, error: '', cartItems: [] };
        case CART_SAVE_SHIPPING_ADDRESS:
            return { ...state, shippingAddress: action.payload };
        case CART_SAVE_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.payload };
        default:
            return state;
    }
};