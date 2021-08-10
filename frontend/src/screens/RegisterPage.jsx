import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// Components
import Alert from '../components/Alert'

// Assets
import { register } from '../actions/userActions'
import logo from '../images/crumple-logo.jpg'
import showPwd from '../images/view.png'
import hidePwd from '../images/hide.png'

function RegisterPage(props) {
  const userRegister = useSelector((state) => state.userRegister)
  const { userInfo, error } = userRegister
  const dispatch = useDispatch()

  const [confirmPassword, setConfirmPassword] = useState('')
  const [isRevealPwd, setIsRevealPwd] = useState(false)
  const [password, setPassword] = useState('')
  const [noMatch, setNoMatch] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setNoMatch('Password and confirm password are not match')
    } else {
      dispatch(register(name, email, password))
    }
  }

  useEffect(() => {
    if (userInfo) {
      props.history.push(`/profile/${userInfo._id}/settings`)
    }
  }, [userInfo, props.history])

  return (
    <div className='form'>
      <form onSubmit={submitHandler}>
        <ul className='form-container'>
          <div className='form-heading'>
            <img className='logo' src={logo} alt='Crumple logo'></img>
            <span>Crumple</span>
          </div>

          <div className='alert-box'>
            {noMatch && <Alert variant='alert alert-danger'>{noMatch}</Alert>}
            {error && <Alert variant='alert alert-danger'>{error}</Alert>}
          </div>

          <div className='form-fields'>
            <h3>Join a community of creators!</h3>

            <li>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                required
                onChange={(e) => setName(e.target.value)}
              ></input>
            </li>

            <li>
              <label htmlFor='email'>
                Email
                <Link to='/signin' className='link'>
                  Already have an account?
                </Link>
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </li>

            <li className='pwd-container'>
              <label htmlFor='password'>Password </label>
              <input
                type={isRevealPwd ? 'text' : 'password'}
                id='password'
                name='password'
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <img
                title={isRevealPwd ? 'Hide password' : 'Show password'}
                src={isRevealPwd ? hidePwd : showPwd}
                alt='show password icon'
                onClick={() => setIsRevealPwd((prevState) => !prevState)}
              />
            </li>

            <li className='pwd-container'>
              <label htmlFor='confirmPassword'>Confirm Password </label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
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

export default RegisterPage
