import React, {useState, useEffect} from 'react'

import CartItem from './CartItem';
import { connect, useDispatch} from 'react-redux';
import {addToCart, removeFromCart,fetchOrders, createOrders, clearOrders}  from '../redux/ActionCreators';

const Cart =({cartItems,products})=> {

  
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

   cartItems.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
     
   });
   console.log('fetch items cart', cartItems)

    setTotalItems(items);
    setTotalPrice(price);
  }, [cartItems, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  // useEffect(()=>{
  //  console.log('carty', cartItems)
  // })
  const qtyChangeHandler = (id, qty) => {
  //  addToCart(id, qty);
  };
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

 
  return (
    <div className=" w-75 m-2 mx-auto">


        <div>
            {cartItems.map((item)=>(
                //  <CartItem/>
                  <CartItem key={item.id} itemData={item} qtyChangeHandler={qtyChangeHandler}/> 
                
            ))
          }
          
        </div>
        <div>
            <h1>Cart Summary</h1>
            <div>
                <span>Subtotal: ({getCartCount} items)</span>
                <span>$ {getCartSubTotal}</span>
            </div>
            <button>
                Proceed to Checkout
            </button>
        </div>
     </div>

  )
}

const mapStateToProps = state => {
 
    return {
        products: state.products,
        cartItems : state.cart.cartItems,
        orders: state.order.order,
        login: state.login,
       
       
        
    }
   
  }
  const mapDispatchToProps = dispatch=>{
    return{
   
    addToCart:(id) => dispatch(addToCart(id)),
    removeFromCart:(cartItems)=>(removeFromCart(cartItems)),
    fetchOrders:()=>(fetchOrders()),
    createOrders:(orders)=>(createOrders(orders)),
    clearOrders:(orders)=>(clearOrders(orders)),
   
    
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
