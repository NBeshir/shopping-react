import * as ActionTypes from './ActionTypes';

const Orders= (state = {}, action) => {

    switch (action.type) {
      case ActionTypes.CREATE_ORDER:
        return { order: action.payload };
      case ActionTypes.CLEAR_ORDER:
        return { order: null };
      case ActionTypes.FETCH_ORDERS:
        return { orders: action.payload };
        // case ActionTypes.CLEAR_CART:
        //    return { cartItems: [] };
      default:
        return state;
    }
  };
  export {Orders} ;