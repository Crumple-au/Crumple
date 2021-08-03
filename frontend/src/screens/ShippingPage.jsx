import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function ShippingPage() {

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    console.log(userInfo)
    return (
        <div>
            
        </div>
    )
}

export default ShippingPage
