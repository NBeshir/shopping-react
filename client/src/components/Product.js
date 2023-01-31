import React,{useState, useEffect} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';
import '../App.css';
import { baseUrl, Url } from '../shared/baseUrl';
import { connect, useDispatch, useSelector} from 'react-redux';
import {fetchProducts,loadCurrentItem,addToCart, removeFromCart,fetchOrders, createOrders, clearOrders,fetchUsers, signin, productDetails }  from '../redux/ActionCreators';





const Product =( {product,  detailedProduct, location, cartItems}) =>{

  
  const [showCheckout, setShowCheckout] = useState(false)

  const [qty, setQty] = useState(1);
  
  // const cartItems = useSelector((state) => state.cart.cartItems);
  const itemsPrice = cartItems.reduce((a, c) => a + c.count * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
 

    useEffect(()=>{
       
        
    // setQty(1);
    console.log('id',itemsPrice)

    },[])
    
  //  const { product, loading, error } = detailedProduct;
      
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnClick=()=>{
  dispatch(addToCart(product._id, qty));
  //  adjustQty(cartItems.id, e.target.value);
    // setQuantity(quantity);

 
    
   }
  //  const qtyChangeHandler = (id, qty) => {
  //   dispatch(addToCart(cartItems.id, qty));
  // };

const checkoutHandler = () => {
 navigate("/signin?redirect=shipping");
}
  return(
    <div className="col-4  text-center">
       <Link to="/shop" className="f-5">Back</Link>
                {/* { product.map((item)=>( */}
       
       {/* { product.filter((product) => (product._id) === (id)).map((item)=>( */}
    


          <div className=" " key={product._id}> 
                  <img
                        className="w-75 rounded"
                        src={`../${product.image}`}
                        alt="shopping cart"
                    /> 
                    {/* <Link to={`/shop/${product._id}`}> */}
                    {/* <button onClick={() => loadCurrentItem(product)}>View Item</button> */}
                    
                    {/* </Link> */}
                  <div className="m-2 mx-auto">
                        <h5 className="mx-auto">{product.name}</h5>
                        <span className="m-2">{product.price /10000}</span>
                        <div className="">
                        {/* onChange={(e)=>qtyChangeHandler(cartItems.e.target.value)} */}
              <p className="p-2">
                <select value={qty} > 
                  <option value="1">1</option>
                  <option  value="2">2</option>
                  <option  value="3">3</option>
                  <option  value="4">4</option>
                  <option  value="5">5</option>
                   {/* {[...Array(cartItems.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                       {x + 1}
                      </option>
                   ))}  */}
                </select>
               
            </p>
           
         
                        <Link to="#yirga" className="btn btn-primary "  onClick={handleOnClick}>
                        Add to cart
                        </Link>
                      
                    </div> 
                            
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
// const mapDispatchToProps= (dispatch)=>{
//  return{
//   fetchProducts: () => (fetchProducts()),
//   addToCart:(_id) => dispatch(addToCart(_id)),
//   loadCurrentItem: (item) => (loadCurrentItem(item)),
//   removeFromCart:(cartItems)=>(removeFromCart(cartItems)),
//   fetchOrders:()=>(fetchOrders()),
//   createOrders:(orders)=>(createOrders(orders)),
//   clearOrders:(orders)=>(clearOrders(orders)),
//   fetchUsers: () => (fetchUsers()),
//  signin: (userSignin) => (signin(userSignin)),
//  productDetails : () => (productDetails ()),
  

//  }
 
  
// }

export default connect(mapStateToProps)(Product);