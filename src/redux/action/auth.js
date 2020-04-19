const axios = require("axios").default;

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

export const CLEAR_LOGIN_ERROR = 'CLEAR_LOGIN_ERROR';


const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    };
};

const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        user
    };
};

const loginError = () => {
    return {
        type: LOGIN_FAILURE
    };
};


const logoutRequest = () => {
    return {
        type: LOGOUT_REQUEST
    };
};

const logoutSuccess = (user) => {
    return {
        type: LOGOUT_SUCCESS,
        user
    };
};

const logoutError = () => {
    return {
        type: LOGOUT_FAILURE
    };
};

export const clearLoginError = ()=>{
    return{
        type:CLEAR_LOGIN_ERROR
    }
}

export const loginUser = (user, pass, usertype) => dispatch => {
    dispatch(loginRequest());
    axios.post("http://localhost:3001/login",
        {
            username: user,
            password: pass,
            usertype: usertype
        }, {
        withCredentials: true
    }
    ).then((response) => {
        console.log(response);
        sessionStorage.setItem("user", JSON.stringify(response.data));
        dispatch(loginSuccess(response.data));
    }).catch((err) => {
        sessionStorage.clear();
        dispatch(loginError());
    })
}

export const logoutUser = () => dispatch => {
    dispatch(logoutRequest());
    axios.get("http://localhost:3001/logout",{withCredentials:true}).then(response=>{
        if(response.status===200){
            sessionStorage.clear();
            dispatch(logoutSuccess())
        }
    }).catch(response=>{
        dispatch(logoutError());
    })
};
