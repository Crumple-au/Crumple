import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signin } from '../actions/userActions.js'
import logo from '../images/crumple-logo.jpg'

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

          <div className="form-heading">
            <img className="logo" src={logo} alt="Crumple logo"></img>
            <span>Crumple</span>
          </div>

          <div class="alert-box">
              {loading && <div>Loading...</div>}
              {error && <div>{error}</div>}
          </div>

          <div className="form-fields">
            <h3>Welcome back</h3>
            <li>
              <label htmlFor='email'>Email 
                <Link
                  className="link" 
                  to={redirect === '/' ? 'register' : 'register?redirect=' + redirect}>
                  New to Crumple?
                </Link>
              </label>
              <input
                type='email'
                name='email'
                id='email'
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor='password'>Password 
                <Link className="link">Forgot your password?</Link>
              </label>
              <input
                type='password'
                id='password'
                name='password'
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

export default SigninPage
