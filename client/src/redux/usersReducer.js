import * as ActionTypes from './ActionTypes';



export const userSigninReducer= (state = {user:{}}, action)=> {

    switch (action.type) {
      case ActionTypes.USER_SIGNIN_REQUEST:
        return { loading: true, 
          isAuthenticated: false, };
      case ActionTypes.USER_SIGNIN_SUCCESS:
        return { loading: false, 
          isAuthenticated: true,
          user:action.payload};
      case ActionTypes.USER_SIGNIN_FAIL:
        return {...state,
           loading: false,
           isAuthenticated:false,
           user:null,
            error: action.payload };
     
      default: return state;
    }
  }
  
  export const userSignupReducer= (state = {}, action)=> {

    switch (action.type) {
      case ActionTypes.USER_SIGNUP_REQUEST:
        return { loading: true,
          isAuthenticated: false };
      case ActionTypes.USER_SIGNUP_SUCCESS:
        return { loading: false, 
          isAuthenticated: true,
        user:action.payload};
      case ActionTypes.USER_SIGNUP_FAIL:
        return {...state,
          loading: false,
          isAuthenticated:false,
          user:null,
           error: action.payload 
          }; 
     
      default: return state;
    }
  }
  export const userSignoutReducer= (state = {}, action)=> {

    switch (action.type) {
      
      case ActionTypes.USER_SIGN_OUT_SUCCESS:
        return { loading: false,
           user:null,
          isAuthenticated:false
        };
        case ActionTypes.USER_SIGN_OUT_FAIL:
        return {...state,
           loading: false,
          
          error:action.payload
        };
       
      default: return state;
    }
  }
  