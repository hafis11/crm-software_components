import {combineReducers} from 'redux';
import auth from './auth';
import adminLead from './adminLead';
import salesLead from './salesLead';
import salesNewLead from './salesNewLead';

let rootReducer = combineReducers({auth,adminLead,salesLead,salesNewLead});
export default rootReducer;