import * as ActionTypes from './ActionTypes';

 const INITIAL_STATE = {
  
    cartItems: [],
  currentItem:null 
}
     


export const cartItems=(state=INITIAL_STATE, action) =>{

      switch (action.type) {
        case ActionTypes.ADD_CART_ITEMS:
          // Great Item data from products array
          const item = state.cartItems.find(
            (item) => item.id === action.payload.id
          );
          // Check if Item is in cart already
          const inCart = state.cartItems.find((item) =>
            item.id === action.payload.id ? true : false
         )
            // const inCart = item ? true : false

          
    
          return {
            ...state,
            cartItems: inCart
              ? state.cartItems.map((item) =>
                  item.id === action.payload.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
                )
              : [...state.cartItems, { ...item, qty: 1 }],
          };
      
    
      
    // switch (action.type) {
    //   case ActionTypes.ADD_CART_ITEMS:

    //   const item = action.payload;
    //   const doesItemExist = state.cartItems.find((i)=> i.id === item.id);
    //   if(doesItemExist){
    //     return{
    //       ...state,
    //       cartItems: state.cartItems.map((i)=> i.id === item.id ? {...item,  qty: item.qty + 1}:item)
    //       // :[...state.cartItems, {...item, qty:1}]

         
    //     };

    //   }else{
    //     return {
    //       ...state, 
      
    //        cartItems:[...state.cartItems, item ],
          

    //   };

      // switch (action.type) {
      //   case ActionTypes.ADD_CART_ITEMS:
  
      //   const item = action.payload;
      //   const doesItemExist = state.cartItems.find((i)=> i.id === item.id);

      //   if(doesItemExist){
      //     return{
      //       ...state,
      //       cartItems: state.cartItems.map((i)=> 
      //       i.id === doesItemExist.id ? item :i),
           
        //   };
  
        // }else{
        //   return {
        //     ...state, 
        
        //      cartItems:[...state.cartItems, item ],
            
  
        // };

      // const item = state.cartItems.find((prod => prod.id === action.payload.id))
      //check if item is already in cart
      // const itemInCart = state.cartItems.find((item) =>
      // item.id === action.payload.id ? true: false
      // );
    // return {
    //   ...state,
    //   cartItems : itemInCart? state.cartItems.map(item => item.id === action.payload.it ?{
    //     ...item, 
    //     qty: item.qty + 1} :item) 
    //     : [...state.cartItems, {
    //       ...item
    //     }]
      
   // }
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

//     switch (action.type) {

//     case ActionTypes.ADD_CARTITEMS:
//     const product = state.cartItems.find(x => x.product === action.payload.product)

//     if (product) {
//         return {
//           cartItems:
//             state.cartItems.map(x => x.product === product.product ? action.payload: x)
//         };
//       }
   
//       return { cartItems: [...state.cartItems, action.payload] };

//     // return { cartItems: action.payload.cartItems };

//     case ActionTypes.REMOVE_FROM_CART:
      
//         // return { cartItems: [] };
//         return { cartItems: action.payload.cartItems };


  
//     default:
//         return state;
// }


// export const cartItems = (state = {
   
//       cartItems: []},
//     action) => {
  
//       switch (action.type) {
  
//       case ActionTypes.ADD_CARTITEMS:
//       const product = state.cartItems.find(x => x.product === action.payload.product)
  
//       if (product) {
//           return {
//             cartItems:
//               state.cartItems.map(x => x.product === product.product ? action.payload: x)
//           };
//         }
     
//         return { cartItems: [...state.cartItems, action.payload] };
  
   
  
//       case ActionTypes.REMOVE_FROM_CART:
        
       
//           return { cartItems: state.cartItems.filter(x => x.product !== action.payload) };
  
  
    
      // default:
      //     return state;
 
  

  }