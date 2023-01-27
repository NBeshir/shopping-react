import * as ActionTypes from './ActionTypes';
// 
const INITIAL_STATE = {}




export const Login = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case ActionTypes.AUTH:
            // console.log('paylood', action.payload)
           return  action.payload;
           //this payload contains token and users
          
        default:
            return state;
    }
}