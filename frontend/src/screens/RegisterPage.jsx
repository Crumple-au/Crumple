import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';
import logo from '../images/crumple-logo.jpg'

function RegisterPage(props) {

    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [rePassword, setRePassword] = useState('');

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/'

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register( email, password));
    }
    
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [userInfo, props.history, redirect]);

    return (
        <div className='form'>
            <form onSubmit={submitHandler}>
                <ul className='form-container'>

                    <div className="form-heading">
                        <img className="logo" src={logo} alt="Crumple logo"></img>
                        <span>Crumple</span>
                    </div>

                    <div className="alert-box">
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                    </div>

                    <div className="form-fields">
                    <h3>Join a community of creates!</h3>

                        <li>
                            <label htmlFor='email'>Email 
                                <Link to="#" className="link">Already have an account?</Link>
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </li>
                        <li>
                            <label htmlFor='password'>Password </label>
                            <input
                                type='password'
                                id='password'
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </li>
                        <li>
                            <label htmlFor='confirmPassword'>Confirm Password </label>
                            <input
                                type='password'
                                id='confirmPassword'
                                name='confirmPassword'
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </li>
                        <li>
                            <button type='submit' className='button primary'>
                            Sign in
                            </button>
                        </li>
                    </div>
                </ul>
            </form>
        </div>
    )
}

export default RegisterPage
