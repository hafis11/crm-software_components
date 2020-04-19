import {
    FETCH_LEADS_FAILURE,
    FETCH_LEADS_SUCCESS,
    FETCH_LEADS_REQUEST
} from '../action';

export default (state={
    isFetchingLeads:false,
    fetchLeadsError:false,
    leads:null
},action)=>{
    switch(action.type){
        case FETCH_LEADS_REQUEST:{
            return{
                ...state,
                isFetchingLeads:true
            }
        }

        case FETCH_LEADS_SUCCESS:{
            return{
                ...state,
                isFetchingLeads:false,
                leads:action.leadsList
            }
        }

        case FETCH_LEADS_FAILURE:{
            return{
                ...state,
                isFetchingLeads:false,
                fetchLeadsError:true
            }
        }

        default: return state
    }
}