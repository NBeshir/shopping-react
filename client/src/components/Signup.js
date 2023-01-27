import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Data from  '../static/content';
import Signin from './SignIn';
import Home from './Home';

import { connect, useDispatch } from 'react-redux';
import {signUp} from '../redux/ActionCreators';
import {Link} from 'react-router-dom';



const mapStateToProps = state => {
 
  return {
      products: state.products,
      cartItems : state.cart.cartItems,
      orders: state.order.order,
      login: state.login,
      userSignin: state.userSignin,
      userSignup: state.userSignup
     
      
  }
 
}

const mapDispatchToProps = {
  
 SignUp: () => (signUp()),
  
}



const SignUp = () => {
  const dispatch= useDispatch();

  const initialState = {
    fname:"",
    lname:"",
    email:"",
    password:""
  }

   const [userData, setUserData] = useState(initialState);

  


  const onChangeHandler =(e)=>{
    
   
  const {name, value} = e.target;
  setUserData({ ...userData, [name]:value});

  console.log(userData);
  }


 // useEffect(()=>{
    // dispatch(fetchProducts(products))
    // dispatch(fetchUsers())
   //  dispatch(signUp(userData));
    
    
      
        
    
  //  console.log('token from main signup',userData)
     
    // console.log('cartItems',cart)
    
   // }, []);
    
  const registerUser = async (e) => {


    e.preventDefault()

    
    dispatch(signUp(userData))
 
// try{

//  const response = await fetch("http://localhost:5000/register",{

//   method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//            fname,
//            lname,
//             email,
//             password
//         })
       
//     })
   
//     const data = await response.json()
    
//     if(data){
     

//        return <Home/>
//     }
     }
 
 



return(
  
    <div className="sign-up ">
        <h2>Don't have an account?</h2>
        <h3>Sign Up Here!</h3>

       
            <form onSubmit={registerUser} className="form p-3" >
           

                  {/* { Data.inputs.map((input,key) =>{ */}
                    
                          <div className="flex">
                              <div className="form-group flex-column">
                              <label htmlFor="fname" className="formlabel"> FirstName</label>
                             
                                <input  type="text"  name="fname" onChange={onChangeHandler}  id="fname" className="formInput" value={userData.fname} placeholder="please enter your first name"/>

                                <label htmlFor="lname" className="formlabel"> Last Name</label>
                             
                             <input  type="text"  name="lname" onChange={onChangeHandler}  id="lname" className="formInput" value={userData.lname} placeholder="please enter your last name"/>

                                <label htmlFor="email" className="formlabel"> Email</label>
                               <input  type="email"  name="email" onChange={onChangeHandler}  id="email" className="formInput" value={userData.email} placeholder="please enter your email"/>
                             
                             
                             <label htmlFor="password" className="formlabel"> Password </label>
                             
                             <input  type="text"   name="password" onChange={onChangeHandler}  id="password" className="formInput" value={userData.password} placeholder="please enter your password"/>
                                <span className="message"></span>
                               
                              </div>
                          
                          

                          </div>
                      
                
       

                    <div className="submit">
                       <Link to="/signin"> <input type="submit" value="Sign Up" className="submit-button" onClick={registerUser}/> </Link>
                    </div>
                    <div>
                      <p> Have an account already? <Link to="/signin" className="signin-link">Sign In</Link></p>
                    </div>


         
             
           
             </form>
       </div>
)
   
}




 export default connect(mapStateToProps, mapDispatchToProps)(SignUp);