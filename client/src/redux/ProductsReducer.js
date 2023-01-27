import * as ActionTypes from './ActionTypes';

export const Products = (state = {
        isLoading: true,
        errMess: null,
        products: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_PRODUCTS:
            return {...state, isLoading: false, errMess: null, products: action.payload};

        case ActionTypes.PRODUCTS_LOADING:
            return {...state, isLoading: true, errMess: null, products:action.payload};

        case ActionTypes.PRODUCTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};

export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
    switch (action.type) {
      case ActionTypes.PRODUCT_DETAILS_REQUEST:
        return { loading: true };
      case ActionTypes.PRODUCT_DETAILS_SUCCESS:
        return { loading: false, product: action.payload };
      case ActionTypes.PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }