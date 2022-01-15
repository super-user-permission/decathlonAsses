import { combineReducers } from 'redux';
import userStatus from './userStatus';
import addItems from './addItems';

const rootReducer = combineReducers({ userStatus, addItems });

export default rootReducer;