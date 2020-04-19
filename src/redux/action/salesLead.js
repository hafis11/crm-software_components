const axios = require("axios").default;

export const FETCH_LEADS_FAILURE = 'FETCH_LEADS_FAILURE';
export const FETCH_LEADS_SUCCESS = 'FETCH_LEADS_SUCCESS';
export const FETCH_LEADS_REQUEST = 'FETCH_LEADS_REQUEST';

const fetchLeadsRequest = ()=>{
    return{
        type:FETCH_LEADS_REQUEST
    }
}

const fetchLeadsSuccess = (leadsList)=>{
    return{
        type:FETCH_LEADS_SUCCESS,
        leadsList
    }
}

const fetchLeadsError = ()=>{
    return{
        type:FETCH_LEADS_FAILURE
    }
}

export const fetchLeads = (sid)=>dispatch=>{
    dispatch(fetchLeadsRequest());
    axios.get(`http://localhost:3001/sales/${sid}/leads/`,{withCredentials:true}).then(response=>{
        if(response.status===200){
            dispatch(fetchLeadsSuccess(response.data));
        }else{
            console.log("Error in fetchLeads ",response.data);
            dispatch(fetchLeadsError());
        }
    }).catch(response=>{
        console.log("Error in fetchLeads ",response.data);
        dispatch(fetchLeadsError());
    })
}