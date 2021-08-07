import React, {useEffect} from 'react';
import '../style/order.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import Alert from '../components/Alert'
import Artworks from '../components/Artworks'

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
    }, [dispatch, artworkId, qty, cartItems]);

    return (
        <div className="cart-container">
            <div>
                <h1 className="cart-heading">Shopping Cart</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                {cartItems.length === 0 ? 
                    <Alert>
                        Cart is empty. <Link to="/categories">Go Shopping</Link>
                    </Alert>
                :
                    <div className="cart-contents">
                        <Artworks artworks={cartItems} onRemove={() => removeFromCartHandler()} />
                    </div>
                }
            </div>

            <div className="card cart-body">
                <>
                    <div>
                        <h2>
                            Subtotal ({cartItems.reduce( (acc, artwork) => acc + artwork.qty, 0) } items) 
                            : ${ cartItems.reduce((acc, artwork) => acc + artwork.price * artwork.qty, 0) }
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={checkoutHandler}
                        disabled={cartItems.length === 0}
                    >
                        Proceed to Checkout
                    </button>
                </>
            </div>
        </div>
    )
}

export default CartPage
