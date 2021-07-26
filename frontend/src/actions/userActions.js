import Axios from "axios";
import { 
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL} from "../constants/userConstants";
import envUrl from '../config.js'

const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await Axios.post(envUrl + "/api/users/signin", { email, password });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
    }
};

const register = (email, password) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } });
    try {
        const { data } = await Axios.post(envUrl + "/api/users/register", { email, password });
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
    }
}

export { signin, register };