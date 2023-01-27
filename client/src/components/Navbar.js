import React,{useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';
import {fetchProducts, addToCart, removeFromCart,fetchOrders, createOrders, clearOrders,fetchUsers,signin,userSignout }  from '../redux/ActionCreators';

const mapStateToProps = state => {
 
  return {
      products: state.products,
      cartItems : state.cart.cartItems,
      orders: state.order.order,
      login: state.login,
      userSignin: state.userSignin,
      userSignout: state.userSignout
     
      
  }
 
}
const mapDispatchToProps = {
  fetchProducts: () => (fetchProducts()),
  addToCart:(products) => (addToCart(products)),
  removeFromCart:(cartItems)=>(removeFromCart(cartItems)),
  fetchOrders:()=>(fetchOrders()),
  createOrders:(orders)=>(createOrders(orders)),
  clearOrders:(orders)=>(clearOrders(orders)),
  fetchUsers: () => (fetchUsers()),
  signin: () => (signin())

  
}



const Navbar = ({countCartItems, cartItems, userSignin,login, userSignout}) => {
  const dispatch= useDispatch();
  const navigate= useNavigate();

 

  useEffect(()=>{
      
      
      dispatch(fetchUsers())
        
          
      
    
    console.log('navbar' ,userSignin)
  // console.log('cartItems',cart)
  
  }, [])

  const handleLogout = () => {
    dispatch(userSignout());
    if(userSignout){
      navigate(`/shop`);
    }
 
  }
  

  // const handleLogout = () => {
  //   dispatch(logout());
  //  navigate("/signin");

  const [cartCount, setCartCount] = useState(0);

  useEffect(()=>{
    let count = 0;
    cartItems.forEach((item) =>{
      count += item.qty;
    });
setCartCount(count)
  },[cartItems, cartCount])

  return (

  
    <nav className="navbar navbar-expand-sm navbar-dark sticky-top">
      <a href='#' className="navbar-brand">
       
          <img src="../images/logo.png" height="40" width="40" alt="logo" />
        
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#nucampNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nucampNavbar">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link" >
                <i className="fa fa-home fa-lg"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" >
                <i className="fa fa-info fa-lg"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a href="#values" className="nav-link" >
                <i className="fa fa-list fa-lg"></i> Our Values
              </a>
            </li>
            <li className="nav-item  ">
              <a href="#contact" className="nav-link">
                <i className="fa fa-address-card fa-lg"></i> Contact
              </a>
              </li>
         
            <li className="nav-item  ">
              <Link  to="/shop" className="nav-link" >
                <i className="fa fa-address-card fa-lg"></i> Shop
              </Link>
            </li>
          </ul>
          <div className="navbar-text ml-auto">
          {cartItems.map(item =>{
                  <a href="/signin" role="button" id="loginButton">
                      <i className="fa fa-sign-in"></i> {item.name}
                  
                 </a>
})}
          <Link to="/cart" role="button" id="loginButton">
             Cart {' '}
          
               <button className="badge">{cartCount}</button>
            
            </Link >{' '}
            {userSignin ? (
               <a href="/signin" role="button" id="loginButton" >{""}
               <i className="fa fa-sign-in"></i> {userSignin.fname}
             </a>

            )
          : <a href="/signin" role="button" id="loginButton" >
          <i className="fa fa-sign-in"></i> Sign In{" "} 
        </a>
        }
           
           

         
           <a href="/logout" role="button" id="loginButton"  onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>  Log out
        </a>
          
          </div>
        </div>
     
    </nav>
   
  );
};
//<i className="fa fa-sign-in"></i> {userInfo.token ? (userInfo.user.name) : "Sign In"}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
