import React,{useState, useEffect} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import Cart from './Cartt';
import '../App.css';
import { baseUrl, Url } from '../shared/baseUrl';
import { connect, useDispatch} from 'react-redux';
import {fetchProducts, addToCart, removeFromCart,fetchOrders, createOrders, clearOrders,fetchUsers, signin, productDetails , adjustQty}  from '../redux/ActionCreators';





const CartItem =( {products, cartItems, addToCart, itemData}) =>{

  
  const [showCheckout, setShowCheckout] = useState(false)
  const [input, setInput] = useState(2)

 
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value);
  };

  useEffect(()=>{
    console.log('item data',cartItems)
  })

  return(
    <div className="item-details text-center w-50">
      <div>
      <img  src={itemData.image} alt="" />
    
              
          
          <div>
            <p>$15</p>
          </div>
          <div>

            <div>
              <label htmlFor="qty">Qty</label>
              <input min="1" type="number" id="qty" name="qty" value={input}
              onChange={onChangeHandler}/>
            </div>
            <button>
              <img src="" alt="" />
            </button>
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
      userSignin: state.userSignin,
      detailedProduct: state.productDetails
     
      
  }
 
}
const mapDispatchToProps = dispatch=>{
  return{
  fetchProducts: () => (fetchProducts()),
  addToCart:(products) => dispatch(addToCart(products)),
  removeFromCart:(cartItems)=>(removeFromCart(cartItems)),
  fetchOrders:()=>(fetchOrders()),
  createOrders:(orders)=>(createOrders(orders)),
  clearOrders:(orders)=>(clearOrders(orders)),
  fetchUsers: () => (fetchUsers()),
 signin: (userSignin) => (signin(userSignin)),
 productDetails : () => (productDetails ()),
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);