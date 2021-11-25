import {createStore,combineReducers,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import adminReducer from '../reducers/adminReducer';

import studentReducer from '../reducers/studentReducer';

// creating store
const configureStore = () => {
    const rootReducer = {
        adminRole:adminReducer,
        studentRole:studentReducer
    }

    const store = createStore(combineReducers(rootReducer),applyMiddleware(thunk));
    return store;
} 
export default configureStore;