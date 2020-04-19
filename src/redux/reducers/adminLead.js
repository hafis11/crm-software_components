import {
    FETCH_SALESMAN_FAILURE,
    FETCH_SALESMAN_REQUEST,
    FETCH_SALESMAN_SUCCESS,
    SHOW_MODAL,
    HIDE_MODAL,
    CLEAR_FETCH_SALESMAN_ERROR
} from '../action';

export default (
    state = {
        isFetchingSalesman: false,
        isLogingOut: false,
        fetchSalesmanError: false,
        logoutError: false,
        isAuthenticated: false,
        salesmanList: null,
        currentSalesman:null,
        showModal:true // this is to check whether salesman select option modal to be shown or not
    }, action) => {
    switch (action.type) {
        case FETCH_SALESMAN_REQUEST:
            return {
                ...state,
                isFetchingSalesman: true,
                fetchSalesmanError: false
            };


        case FETCH_SALESMAN_SUCCESS:
            return {
                ...state,
                isFetchingSalesman: false,
                salesmanList:action.salesmanList
            };


        case FETCH_SALESMAN_FAILURE:
            return {
                ...state,
                isFetchingSalesman: false,
                fetchSalesmanError: true
            };

        case CLEAR_FETCH_SALESMAN_ERROR:
            return{
                ...state,
                fetchSalesmanError:false
            }

        case SHOW_MODAL:
            return {
                ...state,
                showModal:true
            };


        case HIDE_MODAL:
            return {
                ...state,
                showModal:false
            };

        default:
            return state
    }
}