import React, {useState, useEffect} from 'react'
import Order from './Order';
import Modal from "react-modal";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Fade";
import SignIn from './SignIn';
import { useDispatch } from 'react-redux';


export default function Checkout({cartItems,clearOrders, products,removeFromCart, createOrders, orders, fetchOrders}) {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
  
    const [address, setAddress] = useState("");
    const [showCheckout, setShowCheckout] = useState(false)
  
    const itemsPrice = cartItems.reduce((a, c) => a + c.count * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
  
    const dispatch = useDispatch();


  const createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: name,
      email: email,
      address: address,
      cartItems: cartItems,
      total: cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    createOrders(order);
  };

  
  return (
    <div> 
           <form onSubmit={createOrder}>

       
            <ul>
                <li>
                    <label htmlFor="email">Email</label>
                    <input 
                          id="email" 
                           name="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                           
                            />
                </li>
                <li>
                    <label  htmlFor="Name">Name</label>
                    <input 
                        name="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                           
                             />
                </li>
                <li>
                    <label htmlFor="address">Address</label>
                    <input 
                        name="address"
                        type="text"
                        required
                        value={address}
                      onChange={(e)=>setAddress(e.target.value)}
                        />
                </li>
                <li>
                   <button className="button primary" type="submit">Checkout</button>
                </li>
            </ul>
</form>
        </div>
       

  )
}
