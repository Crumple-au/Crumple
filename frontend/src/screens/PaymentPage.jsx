import React from 'react';
import StepsUI from '../components/StepsUI';

const shippingSteps = {
    text1: 'Signin',
    text2: 'Shipping',
    text3: 'Payment',
    text4: 'Place Order'
}

function PaymentPage() {
    return (
        <div>
            <StepsUI step1 step2 step3 text={shippingSteps}></StepsUI>

            <div>
                <h3>Payment Method</h3>
            </div>

            <form>
                <div>
                    <input
                    type="radio"
                    id="paypal"
                    value="paypal"
                    name="paymentMethod"
                    required
                    checked
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
