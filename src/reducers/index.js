import { combineReducers } from 'redux';
import member from './member';

export const allReducers = combineReducers({
    member: member
});