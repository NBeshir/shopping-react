import * as ActionTypes from './ActionTypes';

 const INITIAL_STATE = {
  
    cartItems: [],
    // qty:0,
  currentItem:null 
}
     


export const cartItems=(state=INITIAL_STATE, action) =>{

      
    
      
    switch (action.type) {
      case ActionTypes.ADD_CART_ITEMS:

      const item = action.payload;
      const doesItemExist = state.cartItems.find((i)=> i.product === item.product);
      if(doesItemExist){
        return{
          ...state,
          cartItems: state.cartItems.map((i)=> i.product === doesItemExist.product ? item: i)
         

         
        };

      }else{
        return {
          ...state, 
      
           cartItems:[...state.cartItems, item ],
          

      }
    };

     
      case ActionTypes.REMOVE_FROM_CART:
        return { cartItems: action.payload.cartItems };
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
 
  

  }