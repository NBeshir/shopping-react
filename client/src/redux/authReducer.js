import * as ActionTypes from './ActionTypes';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export const auth = ((state = initialState, action)=>{
    switch(action.type){
        case ActionTypes.USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case ActionTypes.USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case ActionTypes.USER_SIGNIN_SUCCESS:
        case ActionTypes.USER_SIGNUP_SUCCESS:
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };
        case ActionTypes.AUTH_ERROR:
        case ActionTypes.USER_SIGNIN_FAIL:
        case ActionTypes.USER_SIGNOUT_SUCCESS:
        case ActionTypes.USER_SIGNUP_FAIL:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };
        default:
            return state;
    }
})