// import React from 'react';
// import { createStore, combineReducers} from 'redux';
// import { Provider } from 'react-redux'; 
// import { render, fireEvent, cleanup } from '@testing-library/react';
// import SigninPage from '../screens/SigninPage';
// import { afterEach } from 'jest-circus';
// import { it } from 'jest-circus';
// import {userSigninReducer,
//     userRegisterReducer, 
//     userDetailsReducer, 
//     userListReducer, 
//     userUpdateProfileReducer,
//     userDeleteReducer} from '../reducers/userReducers';
// import { expect } from '@jest/globals';

// afterEach(cleanup);

// // const initialState = {
// //     userSignin: { 
// //         userInfo: localStorage.getItem('userInfo') 
// //         ? JSON.parse(localStorage.getItem('userInfo'))
// //         : null
// //     }
// // };

// const reducer = combineReducers({
//     userSignin: userSigninReducer,
//     userRegister: userRegisterReducer,
//     userDetails: userDetailsReducer,
//     userList: userListReducer,
//     userUpdateProfile: userUpdateProfileReducer,
//     userDelete: userDeleteReducer,
// });

// function renderWithRedux(component, {initialState, store = createStore(reducer, initialState)} = {}) {
//     return {
//         ...render(<Provider store={store}>{component}</Provider>)
//     }
// }

// describe('Signin Tests', () => {
//     test('renders with redux', () => {
//         const div = document.createElement('div')
//         const component = renderWithRedux(<SigninPage/>, div)
//         // expect(component.container).toMatchSnapshot()
//     })
// })
