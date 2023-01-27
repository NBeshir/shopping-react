import React,{useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
// import {fetchProducts, addToCart}  from '../redux/ActionCreators';
import Item from './Items';
import { connect, useDispatch } from 'react-redux';
import Cart from './Cart';
import { addToCart } from "../redux/ActionCreators";
import { cartItems } from "../redux/CartItemsReducer";
import Product from "./Product";


const mapStateToProps = state => {
 
  return {
     products: state.products,
   cart : state.cart.cartItems,
   cartItems : state.cart.cartItems,

      
  }
 
}
const mapDispatchToProps = {
 // fetchProducts: () => (fetchProducts()),
  // addToCart:(cartItems) => (addToCart(cartItems))
  addToCart:(id) => (addToCart(id))
}



const  Products =({   cartItems, products, addToCart}) =>{
 // 
 
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  //const handleAddToCart = () => {
  // navigate('/cart/' + props.match.params.id + '?qty=' + qty);
  //};
  const dispatch = useDispatch();

//   const data = cartItems.map((c) =>{
//  return <div>{c.name}</div>
//})

useEffect(()=>{
//   dispatch(addToCart());
console.log("cartitems shop", cartItems)

 },[])

 let Price = cartItems.reduce(
  (acc, item) => acc + item.quantity * item.price,
  0
);

let totalPrice = Price;

//  const addToCartHandler = () => {

//     addToCart(id);
//     console.log("hello coffee")
  
// };

    return (
      <div>
       

        <div className="container content-section mx-auto" id="shop" >
          <div className="row mt-3 shop-items">
          {products.products.map((product) => (

            <Product key={product._id} product={product}/>
          
          ))}
          
          </div>
          </div>

      </div>

           
                        
          
     
       

  
   
        
     
    )
   


    
  }


export default Products;
