import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import {listUsers } from '../actions/userActions';
import { detailsUser } from '../actions/userActions';
import { USER_DETAILS_RESET } from '../constants/userConstants';

function ListUsersPage(props) {
    const { userId } = useParams();

    const userList = useSelector((state) => state.userList);
    const { loading, error, users } = userList;

    const userDetails = useSelector((state) => state.userDetails);
    const { user } = userDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
            dispatch(detailsUser(userId));
        }
        dispatch(listUsers());
        dispatch({ type: USER_DETAILS_RESET });
    }, [dispatch]);

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
                {users.map((user) => (
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
                        onClick={() => props.history.push(`/user/${user._id}/edit`)}
                        >
                        Edit
                        </button>

                        <button
                        type="button"
                        className="small"
                        >
                        Delete
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            )}
        </div>
    )
}

export default ListUsersPage
