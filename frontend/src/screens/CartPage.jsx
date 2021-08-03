import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';


function CartPage(props) {
    const {artworkId} = useParams();
    const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();

    useEffect(() => {
        if (artworkId) {
            dispatch(addToCart(artworkId, qty));
        }
        console.log('CartItems: ', cartItems)
    }, [dispatch, artworkId, qty]);

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? 
                <h3>Cart is empty</h3>
            :
                <>
                    {cartItems.map((item) => (
                        <ul key={item.artwork}>
                            <li>{item.name}</li>
                            <li>${item.price}</li>
                            <li>{item.seller.name}</li>
                        </ul>
                    ))}
                </>
            }

        </div>
    )
}

export default CartPage
