const axios = require("axios").default;

export const FETCH_LEAD_REQUEST = 'FETCH_LEAD_REQUEST';
export const FETCH_LEAD_FAILURE = 'FETCH_LEAD_FAILURE';
export const FETCH_LEAD_SUCCESS = 'FETCH_LEAD_SUCCESS';

export const FETCH_LEAD_PRODUCT_REQUEST = 'FETCH_LEAD_PRODUCT_REQUEST';
export const FETCH_LEAD_PRODUCT_FAILURE = 'FETCH_LEAD_PRODUCT_FAILURE';
export const FETCH_LEAD_PRODUCT_SUCCESS = 'FETCH_LEAD_PRODUCT_SUCCESS';

export const SET_LEAD_ID = 'SET_LEAD_ID';

const fetchLeadRequest = () => {
    return {
        type: FETCH_LEAD_REQUEST
    }
}

const fetchLeadSuccess = (lead) => {
    return {
        type: FETCH_LEAD_SUCCESS,
        lead
    }
}

const fetchLeadFailure = () => {
    return {
        type: FETCH_LEAD_FAILURE
    }
}

const fetchLeadProductRequest = ()=>{
    return{
        type:FETCH_LEAD_PRODUCT_REQUEST
    }
}

const fetchLeadProductSuccess=(products)=>{
    return{
        type:FETCH_LEAD_PRODUCT_SUCCESS,
        products
    }
}

const fetchLeadProductsFailure = ()=>{
    return{
        type:FETCH_LEAD_PRODUCT_FAILURE
    }
}

export const setLeadId = (idsales,idleads)=>{
    return{
        type:SET_LEAD_ID,
        idleads,
        idsales
    }
}

export const fetchLead = (idsales, idleads) => dispatch => {
    dispatch(fetchLeadRequest());
    axios.get(`http://localhost:3001/sales/${idsales}/leads/${idleads}`, { withCredentials: true }).then(response => {
        dispatch(fetchLeadSuccess(response.data));
    }).catch(response => {
        console.warning("Error in fetchLead",response);
        dispatch(fetchLeadFailure());
    })
}

export const fetchLeadProduct = (idsales,idleads)=>dispatch =>{
    dispatch(fetchLeadProductRequest());
    axios.get(`http://localhost:3001/sales/${idsales}/leads/${idleads}/products`,{withCredentials:true}).then(response=>{
        if(response.status===200){
            dispatch(fetchLeadProductSuccess(response.data));
        }
        else{
            dispatch(fetchLeadProductsFailure());
        }
    }).catch(response=>{
        dispatch(fetchLeadProductsFailure());
    })
}
