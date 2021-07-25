import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {userSigninReducer} from './reducers/userReducers';

const initialState = {
    userSignin: { },
};

const reducer = combineReducers({
    userSignin: userSigninReducer
});

// Below code to be able to use Redux browser extention
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;