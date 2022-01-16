import { combineReducers } from 'redux';
import userStatus from './userStatus';
import addItems from './addItems';
import addToSavedItems from './saveCart';

const rootReducer = combineReducers({ userStatus, addItems, addToSavedItems });

export default rootReducer;