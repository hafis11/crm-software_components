import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const initalState={
    isLoggedIn:false,
    isLoggedOut:false,
    loginError:false,
    logoutError:false,
    isAuthenticated:false,
    user:{}
};

var store = createStore(rootReducer,initalState,composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default store;