import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import {listUsers,  deleteUser } from '../actions/userActions';
import { USER_DETAILS_RESET } from '../constants/userConstants';

function ListUsersPage(props) {
    // const { userId } = useParams();

    const userList = useSelector((state) => state.userList);
    const { loading, error, users } = userList;

    const userDelete = useSelector((state) => state.userDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = userDelete;

    const dispatch = useDispatch();

    const deleteHandler = (user) => {
        if (window.confirm('Are you sure?')) {
            dispatch(deleteUser(user._id));
        }
    }

    useEffect(() => {
        dispatch(listUsers());
        dispatch({type: USER_DETAILS_RESET});
    }, [dispatch, successDelete]);

    return (
        <div>
            <h1>Users</h1>

            {loading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>{error}</h1>
            ) : (

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>IS SELLER</th>
                        <th>IS ADMIN</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                {users ? users.map((user) => (
                    <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>
                        <Link to={`/profile/${user._id}`}>{user.name}</Link>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.isSeller ? 'YES' : ' NO'}</td>
                    <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                    <td>
                        <button
                        type="button"
                        className="small"
                        onClick={() => props.history.push(`/profile/edit/${user._id}`)}
                        >
                        Edit
                        </button>

                        <button
                        type="button"
                        className="small"
                        onClick={() => deleteHandler(user)}
                        >
                        Delete
                        </button>
                    </td>
                    </tr>
                ))
                : <h1>No users</h1>
                }
                </tbody>
            </table>
            )}
        </div>
    )
}

export default ListUsersPage
