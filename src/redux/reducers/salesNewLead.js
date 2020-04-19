import {
    FETCH_LEAD_FAILURE,
    FETCH_LEAD_REQUEST,
    FETCH_LEAD_SUCCESS,
    FETCH_LEAD_PRODUCT_FAILURE,
    FETCH_LEAD_PRODUCT_SUCCESS,
    FETCH_LEAD_PRODUCT_REQUEST,
    SET_LEAD_ID
} from '../action'

export default (state = {
    isFetchNewLeadFailed: false,
    isFetchNewLeadRequest: false,
    isFetchNewLeadSuccess: false,

    isFetchLeadProductFailed: false,
    isFetchLeadProductRequest: false,
    isFetchLeadProductSuccess: false,

    lead: null
}, action) => {
    switch (action.type) {
        case FETCH_LEAD_REQUEST:
            return {
                ...state,
                isFetchNewLeadRequest: true
            };
        case FETCH_LEAD_SUCCESS:
            return {
                ...state,
                isFetchNewLeadRequest: false,
                isFetchNewLeadSuccess: true,
                lead: action.lead
            };
        case FETCH_LEAD_FAILURE:
            return {
                ...state,
                isFetchNewLeadFailed: true
            };

        case FETCH_LEAD_PRODUCT_REQUEST:
            return {
                ...state,
                isFetchLeadProductRequest: true
            };
        case FETCH_LEAD_PRODUCT_SUCCESS:
            return {
                ...state,
                isFetchLeadProductRequest: false,
                isFetchLeadProductSuccess: true,
                products: action.products
            };
        case FETCH_LEAD_PRODUCT_FAILURE:
            return {
                ...state,
                isFetchLeadProductFailed: true
            };


        case SET_LEAD_ID:
            return {
                ...state,
                idleads: action.idleads,
                idsales: action.idsales
            }
        default:
            return state;
    }
}