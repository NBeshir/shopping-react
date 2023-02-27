import React,{useState, useEffect} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';
import '../App.css';
import { baseUrl, Url } from '../shared/baseUrl';
import { connect, useDispatch} from 'react-redux';
import {fetchProducts, addToCart, removeFromCart,fetchOrders, createOrders, clearOrders,loadUser, signin, productDetails , adjustQty}  from '../redux/ActionCreators';





const CartItem =( {products, cartItems, addToCart, itemData,user }) =>{

  
  // const [showCheckout, setShowCheckout] = useState(false)
  // const [input, setInput] = useState(itemData.qty)
//  const [input, setInput] = useState(2)
 
  // const onChangeHandler = (e) => {
  //   setInput(e.target.value);
  //   // adjustQty(itemData.id, e.target.value);
  // };

  const dispatch = useDispatch();

  useEffect(()=>{
    console.log('item data', user)
  })
  const onDeleteFromCart = (id, productId) => {
   dispatch(removeFromCart(id, productId));
  //  console.log(id,  productId)
} 


  return(
    <div className="cartitem-container ">
      <div className="">
       
       
      <img  src={`../${itemData.image}`}  alt="photo of cofee"  className="cartitem-img"/>
    
              
          
          <div className="cartitem-price">
          <div>
        <p className="">{itemData.name}</p>
        </div>
            <p >{itemData.price/10000}</p>
            <button className="btn btn-danger w-25 " onClick={onDeleteFromCart(user.id, itemData.productId)}>Delete </button>
          </div>
        
          <div>

          
          </div>
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
      user:state.userSignin.user,
      userSignin: state.userSignin,
      detailedProduct: state.productDetails
     
      
  }
 
}
const mapDispatchToProps = dispatch=>{
  return{
  fetchProducts: () => (fetchProducts()),
  addToCart:(products) => dispatch(addToCart(products)),
  removeFromCart:()=>(removeFromCart()),
  fetchOrders:()=>(fetchOrders()),
  createOrders:(orders)=>(createOrders(orders)),
  clearOrders:(orders)=>(clearOrders(orders)),
  loadUser: () => (loadUser()),
 signin: (userSignin) => (signin(userSignin)),
 productDetails : () => (productDetails ()),
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);