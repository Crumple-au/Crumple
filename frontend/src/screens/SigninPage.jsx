import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signin } from '../actions/userActions.js'

function SigninPage(props) {
  const userSignin = useSelector((state) => state.userSignin)
  const { loading, userInfo, error } = userSignin
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/'

    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(signin(email, password))
    }
    
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect)
      console.log(redirect)
    }
  }, [userInfo])


  return (
    <div className='form'>
      <form onSubmit={submitHandler}>
        <ul className='form-container'>
          <li>
            <h2>Sign-In</h2>
          </li>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li>
          <li>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </li>
          <li>
            <button type='submit' className='button primary'>
              Signin
            </button>
          </li>
          <li>New to Crumple?</li>
          <li>
            <Link
              to={
                redirect === '/' ? 'register' : 'register?redirect=' + redirect
              }
            >
              Create your Crumple account
            </Link>
          </li>
        </ul>
      </form>
    </div>
  )
}

export default SigninPage
