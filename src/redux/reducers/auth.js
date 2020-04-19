import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    CLEAR_LOGIN_ERROR
} from '../action';

export default (
    state = {
        isLogingIn: false,
        isLogingOut: false,
        loginError: false,
        logoutError: false,
        isAuthenticated: false,
        user: {}
    }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLogingIn: true,
                loginError: false
            };


        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogingIn: false,
                isAuthenticated: true,
                user: action.user
            };


        case LOGIN_FAILURE:
            return {
                ...state,
                isLogingIn: false,
                isAuthenticated: false,
                loginError: true
            };


        case LOGOUT_REQUEST:
            return {
                ...state,
                isLogingOut: true,
                logoutError: false
            };


        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLogingOut: false,
                logoutError: false,
                isAuthenticated: false,
                user: {}
            };


        case LOGOUT_FAILURE:
            return {
                ...state,
                isLogingOut: false,
                logoutError: true,
            };

        case CLEAR_LOGIN_ERROR:
            return {
                ...state,
                loginError: false,
            };

        default:
            return state
    }
}