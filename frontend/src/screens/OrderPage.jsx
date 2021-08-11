import Axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import { detailsOrder, payOrder } from '../actions/orderActions';
import Preloader from '../components/Preloader';
import Alert from '../components/Alert';
import {
    ORDER_DELIVER_RESET,
    ORDER_PAY_RESET,
} from '../constants/orderConstants';
import art from '../images/crumple-logo.jpg'


function OrderPage() {

    const {orderId} = useParams();
    const history = useHistory()


    const [sdkReady, setSdkReady] = useState(false);
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;


    const orderPay = useSelector((state) => state.orderPay);
    const {
        loading: loadingPay,
        error: errorPay,
        success: successPay } = orderPay;

    // const orderDeliver = useSelector((state) => state.orderDeliver);
    // const {
    //     loading: loadingDeliver,
    //     error: errorDeliver,
    //     success: successDeliver } = orderDeliver;

    const dispatch = useDispatch();

    useEffect(() => {
        const addPayPalScript = async () => {

            const { data } = await Axios.get('/api/config/paypal');
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
            script.async = true;
            script.onload = () => {
                setSdkReady(true);
            };
            document.body.appendChild(script);
        };

        if (!order || successPay || (order && order._id !== orderId)) {
            dispatch({ type: ORDER_PAY_RESET });
            dispatch({ type: ORDER_DELIVER_RESET });
            dispatch(detailsOrder(orderId));
        } else {
            if (!order.isPaid) {
                if (!window.paypal) {
                    addPayPalScript();
                } else {
                    setSdkReady(true);
                }
            }
        }
    }, [dispatch, orderId, sdkReady, successPay, order]);

    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(order, paymentResult));
        history.push(`/paypal/receipt/${order._id}`)
    };


    return (
        loading ? (
            <Preloader></Preloader>
        ) : error ? (
            <Alert variant="alert alert-danger">{error}</Alert>
        ) : (
        <div>
            <h1 className="m-1 card-title">Order <span>{order._id}</span></h1>
            <div className="row top">
                <div className="col-2">

                    <div className="card card-body">
                        <h1 className="card-title">Shipping</h1>
                        <p>
                            <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                            <strong>Address: </strong> {order.shippingAddress.address},
                            {order.shippingAddress.city},{' '}
                            {order.shippingAddress.postalCode},
                            {order.shippingAddress.country}
                        </p>
                        {order.isDelivered ? (
                            <Alert variant="success">
                                Delivered at {order.deliveredAt}
                            </Alert>
                        ) : (
                            <Alert variant="danger">Not Delivered</Alert>
                        )}
                    </div>

                    <div className="card card-body">
                        <h1 className="card-title">Payment</h1>
                        <p><strong>Method:</strong> {order.paymentMethod}</p>
                        {order.isPaid ? (
                            <Alert variant="alert alert-success">
                                Paid at {order.paidAt}
                            </Alert>
                            ) : (
                            <Alert variant="alert alert-danger">Not Paid</Alert>
                        )}
                    </div>

                    <div className="card card-body">
                        <h1 className="card-title">Order Items</h1>
                        <ul>
                            {order && order.orderItems.map((item) => (
                                <li key={item.product}>
                                <div className="row">
                                    <div>
                                    <img
                                        src={item.image || art}
                                        alt={item.name}
                                        width="200px"
                                        height="200px"
                                    ></img>
                                    </div>
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
                            <li>
                                <h1 className="card-title">Order Summary</h1>
                            </li>
                            <li>
                                <div className="row">
                                <div>Items</div>
                                <div>${order.itemsPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                <div>
                                    <strong> Order Total</strong>
                                </div>
                                <div>
                                    <strong>${order.itemsPrice.toFixed(2)}</strong>
                                </div>
                                </div>
                            </li>
                            {!order.isPaid && (
                                <li>
                                {!sdkReady ? (
                                    <Preloader></Preloader>
                                ) : (
                                    <>
                                    {errorPay && (
                                        <Alert variant="danger">{errorPay}</Alert>
                                    )}
                                    {loadingPay && <Preloader></Preloader>}

                                    <PayPalButton
                                        amount={order.itemsPrice}
                                        onSuccess={successPaymentHandler}
                                    ></PayPalButton>
                                    </>
                                )}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    )
}

export default OrderPage
