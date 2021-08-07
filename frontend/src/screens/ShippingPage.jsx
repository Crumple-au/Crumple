import React, {useState} from 'react'
import '../style/order.scss';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import StepsUI from '../components/StepsUI';

const shippingSteps = {
    text1: 'Signin',
    text2: 'Shipping',
    text3: 'Payment',
    text4: 'Place Order'
}

function ShippingPage(props) {

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    if (!userInfo) {
        props.history.push('/signin');
    }
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    const dispatch = useDispatch();

    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(
            saveShippingAddress({
                fullName,
                address,
                city,
                postalCode,
                country
            }
        ))
        
        props.history.push('/payment')
    }

    return (
        <>
            <StepsUI step1 step2 text={shippingSteps}></StepsUI>
            <div className="shipping-container">
                <form className="shipping-form" onSubmit={submitHandler} >
                    <div>
                        <h1>Shipping Address</h1>
                    </div>
                    <ul>
                        <li>
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Enter full name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            ></input>
                        </li>
                        <li>
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                id="address"
                                placeholder="Enter address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            ></input>
                        </li>
                        <li>
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                id="city"
                                placeholder="Enter city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            ></input>
                        </li>
                        <li>
                            <label htmlFor="postalCode">Postal Code</label>
                            <input
                                type="text"
                                id="postalCode"
                                placeholder="Enter postal code"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                required
                            ></input>
                        </li>
                        <li>
                            <label htmlFor="country">Country</label>
                            <input
                                type="text"
                                id="country"
                                placeholder="Enter country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                            ></input>
                        </li>
                    </ul>
                    <button className="primary" type="submit">
                        Continue
                    </button>
                </form>
            </div>
        </>    
    )
}

export default ShippingPage
