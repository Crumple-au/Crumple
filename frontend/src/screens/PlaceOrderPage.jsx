import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import StepsUI from '../components/StepsUI';
import Preloader from '../components/Preloader';
import Alert from '../components/Alert';
import art from '../images/crumple-logo.jpg'
import { Button } from '@material-ui/core'


const shippingSteps = {
    text1: 'Signin',
    text2: 'Shipping',
    text3: 'Payment',
    text4: 'Place Order'
}

function PlaceOrderPage() {

    const history = useHistory()

    const cart = useSelector((state) => state.cart);
    if (!cart.paymentMethod) {
        history.push('/payment');
    }

    const orderCreate = useSelector((state) => state.orderCreate);
    const { loading, success, error, order } = orderCreate; 

    const toPrice = (num) => Number(num.toFixed(2));

    cart.itemsPrice = toPrice(
        cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    );
    // cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
    cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
    cart.totalPrice = cart.itemsPrice + cart.taxPrice;

    const dispatch = useDispatch();

    const placeOrderHandler = () => {
        dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
    };

    useEffect(() => {
        if (success) {
            history.push(`/order/${order._id}`);
            dispatch({ type: ORDER_CREATE_RESET });
        }
    }, [dispatch, order, history, success]);

    return (
        <div>
            <StepsUI step1 step2 step3 step4 text={shippingSteps}></StepsUI>
            <div className="row top">
                <div className="col-2">
                    
                    <div className="card card-body">
                        <h1 className="card-title">Shipping</h1>
                        <p>
                            <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                            <strong>Address: </strong> {cart.shippingAddress.address}, 
                            {cart.shippingAddress.city},
                            {cart.shippingAddress.postalCode},
                            {cart.shippingAddress.country}
                        </p>
                    </div>
                        
                    <div className="card card-body">
                        <h1 className="card-title">Payment</h1>
                        <p>
                        <strong>Method:</strong> {cart.paymentMethod}
                        </p>
                    </div>
                        
                    <div className="card card-body">
                        <h1 className="card-title">Order <span>Items</span></h1>
                        {/* <Typography gutterBottom variant='h4'>
                            Order<span style={{ color: 'rgb(146, 45, 1)' }}> Items</span>
                        </Typography> */}
                        <ul>
                            {cart.cartItems.map((item) => (
                                <li key={item.product}>
                                    <div className="row">
                                            <img
                                                src={item.image || art}
                                                alt={item.name}
                                                width="200px"
                                                height="200px"
                                            ></img>
                                        <div className="min-30">
                                            <Link to={`/product/${item.product}`}>
                                                {item.name}
                                            </Link>
                                        </div>
                                        <div>
                                            {item.qty} x ${item.price} = ${item.qty * item.price}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                        
                    
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <div>
                                <h1 className="card-title">Order <span style={{color: 'rgb(246, 45, 1)'}}>Summary</span></h1>
                            </div>
                            <li>
                                <div className="row">
                                <div>Items</div>
                                <div>${cart.itemsPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                <div>Tax</div>
                                <div>${cart.taxPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                <div>
                                    <strong> Order Total</strong>
                                </div>
                                <div>
                                    <strong>${cart.totalPrice.toFixed(2)}</strong>
                                </div>
                                </div>
                            </li>
                                <Button
                                    variant='contained'
                                    color="primary"
                                    onClick={placeOrderHandler}
                                    style={{width: "100%"}}
                                    disabled={cart.cartItems.length === 0} >
                                    Place Order
                                </Button>

                        {loading && <Preloader></Preloader>}
                        {error && <Alert variant="danger">{error}</Alert>}
                        </ul>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default PlaceOrderPage
