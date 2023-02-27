import * as ActionTypes from './ActionTypes';

 const INITIAL_STATE = {
  
    cartItems: [],
    loading:false
   
}
     


export const cartItems=(state=INITIAL_STATE, action) =>{

 

    
      
    switch (action.type) {
    
   
      case ActionTypes.ADD_CART_ITEMS:

    
      const item = action.payload;
      console.log('reducer item', item)
      const product = state.cartItems.find(x => x.product === item.product);
      if (product) {
        return {
          cartItems:
            state.cartItems.map(x => x.product === product.product ? item : x)
        };
      }
      console.log('reducer cart item', state.cartItems)
      return { cartItems: [...state.cartItems, item] };
    
  
    
     

     
      case ActionTypes.REMOVE_FROM_CART:
        
       
        return {
          ...state,
          cart: action.payload
         };


        case ActionTypes.CART_SAVE_SHIPPING:
          return { ...state, shipping: action.payload };
          case ActionTypes.ADJUST_QTY:
            return { 
              ...state,
              cart: state.cartItems.filter(item => item.id === action.payload ? {...item, qty:action.payload.qty}: item)
            };
            case ActionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
        case ActionTypes.CART_SAVE_PAYMENT:
          return { ...state, payment: action.payload };
      default:
        return state;
    }
  };


//     case ActionTypes.REMOVE_FROM_CART:
      
//         // return { cartItems: [] };
//         return { cartItems: action.payload.cartItems };


  
//     default:
//         return state;
// }



  
//       case ActionTypes.REMOVE_FROM_CART:
        
       
//           return { cartItems: state.cartItems.filter(x => x.product !== action.payload) };
  
  
    
      // default:
      //     return state;
 
  

  