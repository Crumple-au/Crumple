import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import StepsUI from '../components/StepsUI';

const shippingSteps = {
    text1: 'Signin',
    text2: 'Shipping',
    text3: 'Payment',
    text4: 'Place Order'
}

function PaymentPage(props) {

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    if (!shippingAddress.address) {
        props.history.push('/shipping');
    }
    const dispatch = useDispatch();

    const [paymentMethod, setPaymentMethod] = useState('Paypal');
    console.log(paymentMethod)

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            savePaymentMethod(paymentMethod)
        )
        props.history.push('/placeorder');
    }
    return (
        <div>
            <StepsUI step1 step2 step3 text={shippingSteps}></StepsUI>

            <div>
                <h3>Payment Method</h3>
            </div>

            <form onSubmit={submitHandler}>
                <div>
                    <input
                    type="radio"
                    id="paypal"
                    value="paypal"
                    name="paymentMethod"
                    required
                    checked
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                    </input>
                    <label htmlFor="paypal">Paypal</label>
                </div>
                <div>
                    <input
                    type="radio"
                    id="stripe"
                    value="stripe"
                    name="paymentMethod"
                    required
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                    </input>
                    <label htmlFor="stripe">Stripe</label>
                </div>
                <button className="primary" type="submit">
                    Continue
                </button>
            </form>
        </div>
    )
}

export default PaymentPage
