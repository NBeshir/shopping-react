import React, {useState, useEffect} from 'react'
import { connect, useDispatch } from "react-redux";

import Modal from "react-modal";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Fade";
import {fetchOrders}  from '../redux/ActionCreators';



const mapStateToProps = state => {
 
    return {
      
        orders: state.orders.orders
        
    }
   
  }
  const mapDispatchToProps = {
  
    fetchOrders:()=>(fetchOrders),
   
  }

const Order =({orders})=>{


    const dispatch = useDispatch();
    useEffect(()=>{
  // dispatch(fetchOrders())

 
   
    //  orders.orders.map(order =>{
     console.log('order from fetch', orders)
   
 
    // })
  
 // console.log('cartItems',cart)
 
  }, []);

// return !orders ?(
//     <div>Orders</div>
// ):(
//     <div>
//         <h2>Orders</h2>

//        { orders.map(order=>(
//         <ul>
//             <li>{order._id}</li>
//             <li>{order.createdAt}</li>
//             <li>{order.total}</li>
//             <li>{order.name}</li>
//             <li>{order.email}</li>
//             <li>{order.address}</li>
//             <li>
//                { order.cartItems.map((item)=>{
//                 <div>
//                 {item.count} {" x "} {item.title}
//               </div>

//                })}
//             </li>
//         </ul>
        

//        ))}
//     </div>

   
//)
    
   return(
    <div>{orders.map(items=>{
      return <div>{items}</div>
    })}</div>
   )
  

}

export default connect(mapStateToProps, mapDispatchToProps) (Order);