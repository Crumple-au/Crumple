import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';

function CartPage(props) {
    const productId = useParams();
    const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

    const cart = useSelector((state) => state.cart);
    const { cartItems, error } = cart;
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? 
                <h3>Cart is empty</h3>
            :
                <>
                    {cartItems.map((item) => {
                        <>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                        </>
                    })}
                </>
            }

        </div>
    )
}

export default CartPage
