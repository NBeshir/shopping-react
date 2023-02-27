import {Link, useNavigate} from 'react-router-dom';
import Data from '../static/content';
import React, {useState, useEffect} from 'react';
import { baseUrl , Url} from '../shared/baseUrl';

import { connect, useDispatch} from 'react-redux';
import {fetchProducts, addToCart, removeFromCart,fetchOrders, createOrders, clearOrders,loadUser , signin}  from '../redux/ActionCreators';
import ItemDetails from './CartItem';


const mapStateToProps = state => {
 
  return {
      products: state.products,
      cartItems : state.cart.cartItems,
      orders: state.order.order,
     login: state.login, 
     userSignin: state.userSignin.userInfo
      
  }
 
}
const mapDispatchToProps = {
 signin:() =>(signin()),
 loadUser: () => (loadUser()),

  
}



const SignIn = ({ login,  userSignin,products, cartItems, history, location}) => {

  // const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [userData, setUserData] = useState({email:'', password:''});



//   useEffect(() => {
    
//     const cart = cartItems.map(items => items.id)
//     // navigate("/signin?redirect=shipping");
//      if (userSignin) navigate(`/Items/`)
    
//     console.log('car',cart)
   
// },[userSignin, navigate])


const initialValues = {
  email:"",
  password:""
}
const [userData, setUserData] = useState(initialValues);

const handleChange = (e) =>{
  const { name, value } = e.target;

  setUserData({...userData, [name]:value})

}

  const handleSubmit =  (e) =>{
   
    e.preventDefault();
   
  // dispatch(fetchUsers(userData))
  dispatch(signin(userData))
  navigate("/cart")
  console.log('token from signin', userSignin)
  
   

  }
  return (
     
           
      <div className="sign-in">
        
            <h2>Sign In </h2>
            <form className="form" onSubmit={handleSubmit}>
                
                     
                          <div>
                          

                              <div className="form-group">
                                    <label htmlFor="email" className="formLabel">Email</label>
                                    
                                    <input  type="email" name="email" id="email" className="formInput" value={userData.email} placeholder="please enter your email"
                                    onChange={handleChange} />

                                    <label htmlFor="password" className="formLabel">Password</label>
                                    
                                    <input  type="text" name="password" id="password" className="formInput" value={userData.password} placeholder="please enter your password" 
                                      onChange={handleChange}/>


                              </div>

                              </div>
                        
                  


               
                    <div className="submit">
                       <button type="submit" className="submit-button" onClick={handleSubmit}>Sign In</button> 
                          
                    </div>
                     <p><Link to="/signup" className="forgot-password">Forgot Password?</Link></p>
                        <div>
                          <p> Don't have an account ? <Link to="/signup" className="signup-link">Sign Up</Link></p>
                          
                        </div> 
                      
             
              
            </form>
      </div>
      
  )
}

export default  connect(mapStateToProps, mapDispatchToProps)(SignIn);