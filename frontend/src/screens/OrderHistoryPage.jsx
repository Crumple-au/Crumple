import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { listOrderMine } from '../actions/orderActions';
import Preloader from '../components/Preloader';
import Alert from '../components/Alert';

function OrderHistoryPage() {

    const history = useHistory();

    const orderMineList = useSelector((state) => state.orderMineList);
    const { loading, error, orders } = orderMineList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listOrderMine());
    }, [dispatch]);

    return (
        <div className="card">
            <h1 className="card-title">Order <span>History</span></h1>
            {loading ? (
                <Preloader></Preloader>
            ) : error ? (
                <Alert variant="alert alert-danger">{error}</Alert>
            ) : (
                <table className="table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>PAID</th>
                    <th>DELIVERED</th>
                    <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                    <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.createdAt.substring(0, 10)}</td>
                        <td>{order.itemsPrice.toFixed(2)}</td>
                        <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                        <td>
                        {order.isDelivered
                            ? order.deliveredAt.substring(0, 10)
                            : 'No'}
                        </td>
                        <td>
                        <button
                            type="button"
                            className="small"
                            onClick={() => {
                            history.push(`/order/${order._id}`);
                            }}
                        >
                            Details
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

export default OrderHistoryPage
