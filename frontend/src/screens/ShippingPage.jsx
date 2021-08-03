import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function ShippingPage() {

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    const dispatch = useDispatch();

    
    
    return (
        <div>
            
        </div>
    )
}

export default ShippingPage
