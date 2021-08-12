import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detailsOrder } from '../actions/orderActions';
import Preloader from '../components/Preloader';
import Alert from '../components/Alert';

function ReceiptPage() {

    const {orderId} = useParams();

    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        if (!order || (order && order._id !== orderId)) {
            dispatch(detailsOrder(orderId));
        } 
    }, [dispatch, order, orderId])

    return (
        loading ? (
            <Preloader></Preloader>
        ) : error ? (
            <Alert variant="alert alert-danger">{error}</Alert>
        ) : (
        <div className="receipt-container">
            <div className="cat">
                <div className="ear right"></div>
                <div className="ear left"></div>
                <div className="headband">
                    <div className=" middle">
                        <div className="  inner"></div>
                    </div>
                </div>
                <div className="eye left"></div>
                <div className="eye right"></div>
                <div className="mouth">
                    <div className="tongue"></div>
                </div> 
                <ul>
                    <h1>Thank you for your order!</h1>
                    <hr></hr>
                    <p>Your order has been received by {order.seller.name} and will be delivered soon.</p>
                    <li><strong>Order number: </strong>{order._id}</li>
                    <li><strong>Payment amount: </strong>${order.itemsPrice}</li>
                    <li><strong>Payment status: </strong>{order.paymentResult.status}</li>

                    {order.orderItems.map((item) => (
                        <li key={item.name}>
                            {item.name} x {item.qty}     
                        </li>
                    ))}

                    <hr></hr>
                    <h3>Shipping to: {order.shippingAddress.fullName}</h3>
                    <li><strong>Address: </strong>{order.shippingAddress.address}</li>
                    <li><strong>City: </strong>{order.shippingAddress.city}</li>
                    <li><strong>Post code: </strong>{order.shippingAddress.postalCode}</li>
                    <li><strong>Country: </strong>{order.shippingAddress.country}</li>
                </ul>

                <div className="tail"></div>
            </div>
        </div>
        )
    )
}

export default ReceiptPage
