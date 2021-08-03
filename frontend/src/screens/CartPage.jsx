import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import Alert from '../components/Alert'

function CartPage(props) {
    const {artworkId} = useParams();
    const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

    const cart = useSelector((state) => state.cart);
    const { cartItems, error } = cart;
    const dispatch = useDispatch();

    const removeFromCartHandler = (artworkId) => {
        // delete action
        dispatch(removeFromCart(artworkId));
    };

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    };

    useEffect(() => {
        if (artworkId) {
            dispatch(addToCart(artworkId, qty));
        }
        console.log('CartItems: ', cartItems)
    }, [dispatch, artworkId, qty]);

    return (
        <div>
            <h1>Shopping Cart</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            {cartItems.length === 0 ? 
                <Alert>
                    Cart is empty. <Link to="/categories">Go Shopping</Link>
                </Alert>
            :
                <>
                    {cartItems.map((item) => (
                        <ul key={item._id}>
                            <li>{item.name}</li>
                            <li>${item.price}</li>
                            <li>{item.seller.name}</li>
                            <button
                                type="button"
                                onClick={() => removeFromCartHandler(item._id)}
                                > Delete
                            </button>
                        </ul>
                    ))}
                </>
            }

            <div className="card card-body">
                <ul>
                    <li>
                        <h2>
                            Subtotal ({cartItems.reduce( (acc, artwork) => acc + artwork.qty, 0) } items) 
                            : ${ cartItems.reduce((acc, artwork) => acc + artwork.price * artwork.qty, 0) }
                        </h2>
                    </li>

                    <button
                        type="button"
                        onClick={checkoutHandler}
                        disabled={cartItems.length === 0}
                    >
                        Proceed to Checkout
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default CartPage
