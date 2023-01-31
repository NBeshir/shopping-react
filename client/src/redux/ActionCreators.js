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

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:5000/shop/${id}`)
  // const cartItems = getState().cart.cartItems.slice()

  // console.log('addtocart',id)
  console.log('action data', data)


  dispatch({
    type: ActionTypes.ADD_CART_ITEMS,
    payload: {
      product: data._id,
      productName: data.name,
      price: data.price,
      image: data.image,
      countInStock: data.countInStock,

      qty


    }

  })
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));

}




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





//   export const addToCart =(productId) => async (dispatch, getState)=>{

//  console.log('product Id', productId)
//    try{

//       const { data } = await axios.get("/shop/" + productId);

//    dispatch({
//     type: ActionTypes.ADD_CARTITEMS, payload: {
//       product: data._id,
//       name: data.name,
//       image: data.image,
//       price: data.price,
//       countInStock: data.countInStock,

//     }
//   });

//     const cartItems = getState().cart.cartItems.slice();
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));



//  }


//      catch (error) {
//         dispatch(cartItemsFailed(error.message));
//       }

//     }


// export const cartItemsLoading = (data) => ({
//     type: ActionTypes.CARTITEMS_LOADING,
//     payload: data

// });
// export const cartItemsFailed = errMess => ({
//     type: ActionTypes.CARTITEMS_FAILED,
//     payload: errMess
// });

// export const removeCartItems =(items)=> ({
//     type: ActionTypes.REMOVE_FROM_CART,
//     payload:items
// });

// export const addCartItems =(items, qty) => ({
//     type: ActionTypes.ADD_CARTITEMS,

//     payload: {
//         product:items._id,
//         name:items.name,
//         image:items.image,
//         price:items.price,
//         countInStock:items.countInStock,
//         qty

//     }

// });

export const removeFromCart = (product) => async (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice().filter((x) => x._id !== product._id);

  dispatch({ type: ActionTypes.REMOVE_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // console.log('remove',cartItems)
}

//login users
export const fetchUsers = (data) => async (dispatch) => {
  try {
    // dispatch({type :ActionTypes.ADD_PRODUCTS});
    const res = await fetch(
      Url + 'signin', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",



      },


    })
    console.log('user data', data)
    const userData = await res.json()
    if (userData.token) {
      dispatch({
        type: ActionTypes.AUTH,
        payload: {
          token: userData.token,
          users: userData.user


        }

      })
      console.log('token and user', userData)
      console.log('token from login action', userData.token)
      console.log('user from login action', userData.user)



      localStorage.setItem('token', userData.token)
      dispatch({
        type: ActionTypes.ALERT,
        payload: {
          success: userData.msg
        }
      })
      // alert('login successful');
      // alert(userData.token);
      //window.location.href = 'user/id';
    }








  } catch (err) {
    dispatch({
      type: ActionTypes.ALERT,
      payload: {
        error: err.msg
      }
    })

  }


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
  dispatch({ type: ActionTypes.USER_SIGN_OUT_SUCCESS });
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