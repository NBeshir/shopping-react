import React, {useState, useEffect} from 'react'
import SignIn from './SignIn';
import CartItem from './CartItem';
import { connect, useDispatch} from 'react-redux';
import {addToCart, removeFromCart,fetchOrders, createOrders, clearOrders}  from '../redux/ActionCreators';
import "../App.css";


const CartSummary =({cartItems, products, isAuthenticated,user, loading})=> {

  // const itemsPrice = cartItems.reduce((a, c) => a + c.countInStock * c.price, 0);
  // const taxPrice = itemsPrice * 0.14;
  // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  // const totalPrice = itemsPrice + taxPrice + shippingPrice;
 
  
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [loadItems, setLoadItems] = useState(false);

  useEffect(() => {
    let items = 0;
    let price = 0;

   cartItems.forEach((item) => {
      items += item.quantity;
      price += item.quantity * item.price;

     
   });
    console.log('cart items from cart', cartItems)
   console.log('fetch items cart',user)

    setTotalItems(items);
    setTotalPrice(price);
  }, [cartItems, totalPrice, totalItems, setTotalPrice, setTotalItems]);


  useEffect(()=>{
   console.log('carty', cartItems)
  })
  // const qtyChangeHandler = (id, qty) => {
  // //  addToCart(id, qty);
  // };
  const getCartCount = () => {
    return cartItems.reduce((quantity, item) => Number(item.qty) + quantity, 0);
  };
  const getCartSubTotal = () => {
    return cartItems
   
      .reduce((price, item) => price + item.price * item.quantity, 0)
      .toFixed(2);
  };

  
   

  return (
  
    
         <div className="cart-total mt-5 ">
            <h1>Cart Summary</h1>
            <div className="cart-data">
                <span>Subtotal({getCartCount()} items):</span>
                <span className="m-2">$ {getCartSubTotal()/10000}</span>
            </div>
            <div className=' mx-auto p2'>
                <button className="cart-btn">
                  Proceed to checkout
                </button>
            </div>
           
        </div>
      
       
            
  

  )
}

const mapStateToProps = state => {
 
    return {
        products: state.products,
        cartItems : state.cart.cartItems,
       loading : state.cart.loading,
        orders: state.order.order,
        login: state.login,
        user:state.userSignin.user,
        isAuthenticated: state.userSignin.isAuthenticated,
       
       
        
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
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
