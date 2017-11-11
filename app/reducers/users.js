import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedUsers = createReducer({}, {
    
});

export const UserCount = createReducer(0, {
    [types.ADD_USER](state, action){
        return state + 1;
    }
});