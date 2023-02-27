import * as ActionTypes from './ActionTypes';
import axios from 'axios';
import { baseUrl, Url } from '../shared/baseUrl';

// import Cookie from "js-cookie";


export const fetchProducts = () => async (dispatch) => {




  try {
    // dispatch({type :ActionTypes.ADD_PRODUCTS});
    const { data } = await axios.get(
      baseUrl
    );

    dispatch({
      type: ActionTypes.FETCH_PRODUCTS,
      payload: data
    })
    // console.log('fetch data', data)

  }
  catch (errMess) {
    // dispatch({
    //   type: ActionTypes.PRODUCTS_FAILED,
    //   payload: errMess

    // });
    console.log(errMess)
  }
};

export const productsLoading = (data) => ({
  type: ActionTypes.PRODUCTS_LOADING,
  payload: data

});

export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({ type: ActionTypes.USER_LOADING });

    axios.get('/', tokenConfig(getState))
        .then(res => dispatch({
            type: ActionTypes.USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            // dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: ActionTypes.AUTH_ERROR
            });
        });
}

// export const productsFailed = errMess => ({
//     type: ActionTypes.PRODUCTS_FAILED,
//     payload: errMess
// });

// export const fetchProducts = products => ({
//     type: ActionTypes.FETCH_PRODUCTS,
//     payload: products
// });


export const fetchOrders = () => async (dispatch) => {
  fetch(Url + 'orders')
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: ActionTypes.FETCH_ORDERS, payload: data });
    });

  // try{
  //   const {data} =  await axios.get(
  //     Url + 'orders'
  //  );
  //  console.log('order from action', data)
  //  dispatch({
  //   type: ActionTypes.FETCH_ORDERS,
  //   payload: data
  // })


  // }
  // catch(errMess) {
  // dispatch({
  // type: ActionTypes.PRODUCTS_FAILED,
  // payload: errMess
  // console.log(errMess)

  //})
}


export const productDetails = (productId) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.PRODUCT_DETAILS_REQUEST, payload: productId });
    const { data } = await axios.get(`http://localhost:5000/shop/${productId}`);

    dispatch({ type: ActionTypes.PRODUCT_DETAILS_SUCCESS, payload: data });
    console.log('details', data)
  } catch (error) {
    dispatch({ type: ActionTypes.PRODUCT_DETAILS_FAIL, payload: error.message });

  }
};


//  axios.get("/orders")
//     .then((res) => res.json())
//     .then((data) => {
//       dispatch({ type: ActionTypes.FETCH_ORDERS, payload: data });
//     });



export const createOrders = (order) => (dispatch, getState) => {

  fetch((Url + 'orders'), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('order data', data)
      dispatch({ type: ActionTypes.CREATE_ORDER, payload: data });
      localStorage.clear("cartItems");
      dispatch({ type: ActionTypes.CLEAR_CART });
    });
};

export const clearOrders = () => (dispatch) => {
  dispatch({ type: ActionTypes.CLEAR_ORDER })
}

// export const getCart = (id) => dispatch => {
//   // dispatch(setCartLoading());
//   axios.get(`http://localhost:5000/cart/${id}`)
//       .then(res => dispatch({
//           type: ActionTypes.GET_CART_ITEMS,
//           payload: res.data
//       }))
//       .catch(err => console.log(err));
// }


// export const addToCart = (id, productId, quantity) => async (dispatch, getState) => {
// //  const {data} = await axios.get(`http://localhost:5000/cart/${id}`)
//   await axios.post(`http://localhost:5000/cart/${id}`, {productId, quantity})
  
//   // console.log('action data', data)

//   .then(res => dispatch({
//     type: ActionTypes.ADD_CART_ITEMS,
//     payload: res.data
// }))
// .catch(err => console.log(err));
// }

  


//   dispatch({
//     type: ActionTypes.ADD_CART_ITEMS,
//     payload: {
//       id: data._userId,
     
//       items:data.items,
      
    
    
//     total:data.total

      


//     },

//  });
  //localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));






export const adjustQty = (id, value) => {
  return {
    type: ActionTypes.ADJUST_QTY,
    payload: {
      id: id,
      qty: value
    }
  }
}
export const currentTotal = (item) => {
  return {
    type: ActionTypes.CART_ITEMS_LOADING,
    payload:
      item

  }
}




// catch (error) {
//     dispatch(cartItemsFailed(error.message));





  export const addToCart =(userId, productId, qty) => async (dispatch, getState)=>{

    const {data} = await axios.get(`http://localhost:5000/shop/${productId}`)
    // const {data} = await axios.get(`http://localhost:5000/cart/${userId}`)
    console.log("data from add cart action", data, userId)

   dispatch({
    type: ActionTypes.ADD_CART_ITEMS, 
    payload: {
      userId:userId,
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty

    }
  });

  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));


  }



export const removeFromCart = (id) => async (dispatch, getState) => {
  

  
    dispatch({
      type: ActionTypes.REMOVE_FROM_CART,
      payload: id,
    })
  
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  }



// }
export const register = ({name, email, password}) => dispatch => {
    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //request body
    const body = JSON.stringify({name, email, password});

    axios.post('/api/register',body,config)
        .then(res => dispatch({
            type: ActionTypes.USER_SIGNUP_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            // dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: ActionTypes.USER_SIGNUP_FAIL
            });
        });
}

export const login = ({email, password}) => dispatch => {
  // headers
  const config = {
      headers: {
          'Content-Type': 'application/json'
      }
  }

  //request body
  const body = JSON.stringify({email, password});

  axios.post('/login',body,config)
      .then(res => dispatch({
          type: ActionTypes.USER_SIGNIN_SUCCESS,
          payload: res.data
      }))
      .catch(err => {
          // dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
          dispatch({
              type:ActionTypes.USER_SIGNIN_FAIL
          });
      });
}
// logout user
export const logout = () => {
  return {
      type: ActionTypes.USER_SIGNOUT_SUCCESS
  }
}

// Setup config/headers and token
export const tokenConfig = getState => {
  //Get token from local storage
  const token = getState().auth.token;

  // Headers
  const config = {
      headers:{
          "Content-type": "application/json",
      }
  }

  if(token){
      config.headers['x-auth-token'] = token;
  }

  return config;
}

export const signin = (userData) => async (dispatch) => {
  // dispatch({ type:  ActionTypes.USER_SIGNIN_REQUEST, payload: { userData} });
  // try {

  // const  data  = await fetch(
  //   Url + 'signin',{
  //    method: "POST",
  //    body: JSON.stringify(userData),
  //    headers: {
  //      "Content-Type": "application/json",

  //    }

  //    })

  try {
    dispatch({ type: ActionTypes.USER_SIGNIN_REQUEST });
    const header = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      Url + 'signin',
      userData,
      header


    );

    dispatch({ type: ActionTypes.USER_SIGNIN_SUCCESS, payload: data.user });



  } catch (error) {

    dispatch({ type: ActionTypes.USER_SIGNIN_FAIL, payload: error.message });
  }
};

export const signUp = (userData) => async (dispatch) => {
  dispatch({ type: ActionTypes.USER_SIGNUP_REQUEST, payload: { userData } });
  try {

    const data = await fetch(
      Url + 'register', {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",

      }

    })
    const user = await data.json()
    dispatch({ type: ActionTypes.USER_SIGNUP_SUCCESS, payload: user });
    localStorage.setItem('token', userData.token)
    // Cookie.set('userInfo', JSON.stringify(data));
    console.log('data', user)
  } catch (error) {

    dispatch({ type: ActionTypes.USER_SIGNUP_FAIL, payload: error.message });
  }
}


export const userSignout = () => async (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: ActionTypes.USER_SIGNOUT_SUCCESS });
}


export const saveShipping = (data) => (dispatch) => {
  dispatch({ type: ActionTypes.CART_SAVE_SHIPPING, payload: data });
}
export const savePayment = (data) => (dispatch) => {
  dispatch({ type: ActionTypes.CART_SAVE_PAYMENT, payload: data });
}

export const loadCurrentItem = (item) => {
  return {
    type: ActionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};