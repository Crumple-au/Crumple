import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listUsers, deleteUser } from '../actions/userActions'
import { USER_DETAILS_RESET } from '../constants/userConstants'
import Alert from '../components/Alert'
import Preloader from '../components/Preloader'
import { Box } from '@material-ui/core'

function ListUsersPage(props) {
  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userDelete = useSelector((state) => state.userDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete

  const dispatch = useDispatch()

  const deleteHandler = (user) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteUser(user._id))
    }
  }

  useEffect(() => {
    dispatch(listUsers())
    dispatch({ type: USER_DETAILS_RESET })
  }, [dispatch, successDelete])

  return (
    <>
      <Box m='4rem 2rem 2rem 2rem'>
        <h1>List of all users</h1>

        {loadingDelete && <Preloader />}
        {errorDelete && <Alert variant='danger'>{errorDelete}</Alert>}
        {successDelete && (
          <Alert variant='success'>User Deleted Succussfully</Alert>
        )}

        {loading ? (
          <Preloader />
        ) : error ? (
          <Alert variant='danger'>{error}</Alert>
        ) : (
          <>
            <table className='table'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>IS ADMIN</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>
                      <Link to={`/profile/${user._id}`}>{user.name}</Link>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.isAdmin ? <strong>YES</strong> : 'NO'}</td>
                    <td>
                      <button
                        type='button'
                        className='small'
                        onClick={() =>
                          props.history.push(`/profile/${user._id}/settings`)
                        }
                      >
                        Edit
                      </button>

                      <button
                        type='button'
                        className='small'
                        onClick={() => deleteHandler(user)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </Box>
    </>
  )
}

export default ListUsersPage
