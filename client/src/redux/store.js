import {  combineReducers, applyMiddleware  } from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Products,productDetailsReducer} from './ProductsReducer';
import {cartItems, quantity} from './CartItemsReducer';
import {Orders} from './OrderReducer';
import {Login} from './SigninReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {userSigninReducer, userSignupReducer,userSignoutReducer} from './usersReducer'

import Cookie from 'js-cookie';
// import {Users} from './users';


// const cartItems = Cookie.getJSON('cartItems') || [];
// const userInfo = Cookie.getJSON('userInfo') || null;

// const initialState = {
//   cart: { cartItems, shipping: {}, payment: {} },
//   userSignin: { userInfo },
//};

const reducers = combineReducers({
    products:Products,
    cart: cartItems,
 
    order: Orders,
 //    login:Login,
    userSignin: userSigninReducer,
    userSignup: userSignupReducer,
    userSignout: userSignoutReducer,
    productDetails: productDetailsReducer

})

let initialState = {

    cart: { cartItems: localStorage.getItem("cartItems") 
    ? JSON.parse(localStorage.getItem("cartItems")) :[],
    shippingInfo: localStorage.getItem("shippingInfo") 
    ? JSON.parse(localStorage.getItem("shippingInfo")) :{},
    

    
}
};
// const middleware = [thunk, logger];

 
 const store = configureStore(
    {reducer:reducers},
    initialState,
 
  
    //applyMiddleware(thunk)
   composeWithDevTools(
    applyMiddleware(thunk, logger)
    )
    
 
   );


 


//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const ConfigureStore =() =>{
//     const store = createStore(
//         combineReducers({
//             products:Products,
//            cart: cartItems,
//            order: Orders,
//         //    login:Login,
//            userSignin: userSigninReducer,
//            userSignup: userSignupReducer,
//            userSignout: userSignoutReducer,
//            productDetails: productDetailsReducer
          
          
           
    //     }),
    //     composeEnhancer(applyMiddleware(thunk, logger))
    // )
   
   

export default store;