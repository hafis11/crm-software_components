import $ from 'jquery';
const axios = require("axios").default;

export const FETCH_SALESMAN_SUCCESS = 'FETCH_SALESMAN_SUCCESS';
export const FETCH_SALESMAN_FAILURE = 'FETCH_SALESMAN_FAILURE';
export const FETCH_SALESMAN_REQUEST = 'FETCH_SALESMAN_REQUEST';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
// export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

export const CLEAR_FETCH_SALESMAN_ERROR = 'CLEAR_FETCH_SALESMAN_ERROR';


const fetchSalesmanRequest = () => {
    return {
        type: FETCH_SALESMAN_REQUEST
    };
};

const fetchSalesmanSuccess = (salespersonList) => {
    return {
        type: FETCH_SALESMAN_SUCCESS,
        salespersonList
    };
};

const fetchSalesmanError = () => {
    return {
        type: FETCH_SALESMAN_FAILURE
    };
};

export const clearFetchSalesmanError = () => {
    return {
        type: CLEAR_FETCH_SALESMAN_ERROR
    }
}

export const showModal = ()=>{
    return{
        type:SHOW_MODAL
    }
}

export const hideModal = ()=>{
    return{
        type:HIDE_MODAL
    }
}

export const fetchSalesman = () => dispatch => {
    dispatch(fetchSalesmanRequest());
    axios.get("http://localhost:3001/admin/sales",
        {
            withCredentials: true
        }
    ).then((response) => {
        console.log(response);
        if(response.status===200)
        {
            dispatch(fetchSalesmanSuccess(response.data));
        }
    }).catch((err) => {
        console.log(err);
        dispatch(fetchSalesmanError());
    })
}

