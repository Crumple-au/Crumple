import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// Components
import Alert from '../components/Alert.jsx'

// Assets
import { signin } from '../actions/userActions.js'
import showPwd from '../images/view.png'
import hidePwd from '../images/hide.png'
import logo from '../images/crumple-logo.jpg'

function SigninPage(props) {
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo, error } = userSignin

  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRevealPwd, setIsRevealPwd] = useState(false);

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
    }
  }, [userInfo, props.history, redirect])


  return (
    <div className='form'>
      <form onSubmit={submitHandler}>
        <ul className='form-container'>

          <div className="form-heading">
            <img className="logo" src={logo} alt="Crumple logo"></img>
            <span>Crumple</span>
          </div>

          <div className="alert-box">
            {error && <Alert variant="alert alert-danger">{error}</Alert>}
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

            <li className="pwd-container">
              <label htmlFor='password'>Password 
                <Link to="#" className="link">Forgot your password?</Link>
              </label>
              <input
                type={isRevealPwd ? 'text' : 'password'}
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <img
                title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? hidePwd : showPwd }
                alt="show password icon"
                onClick={() => setIsRevealPwd(prevState => !prevState)}
              />
            </li>

              <button type='submit' className='button primary'>
                Sign in
              </button>
          </div>
        </ul>
      </form>
    </div>
  )
}

export default SigninPage
