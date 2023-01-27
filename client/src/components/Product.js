import React,{useState, useEffect} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';
import '../App.css';
import { baseUrl, Url } from '../shared/baseUrl';
import { connect, useDispatch} from 'react-redux';
import {fetchProducts, addToCart,loadCurrentItem, removeFromCart,fetchOrders, createOrders, clearOrders,fetchUsers, signin, productDetails }  from '../redux/ActionCreators';





const Product =( {product, cartItems, addToCart, detailedProduct, match}) =>{

  
  const [showCheckout, setShowCheckout] = useState(false)

  // const [quantity, setQuantity] = useState(1);
  const qty = 2;

  const itemsPrice = cartItems.reduce((a, c) => a + c.count * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  // {products, cartItems, addToCart, detailedProduct}
    const dispatch = useDispatch();
    const {id }= useParams()
    // +match.params.campsiteId)[0]
//     const product = products.products.find(product =>{
// console.log(product.id)})
   
    useEffect(()=>{
       
        // product items are array
        // param items are strings
        //  products.products.filter((product) => parseInt(product.id) === parseInt(id)).map((items)=>{
            // const items = products.products.filter((product) => parseInt(product._id) === parseInt(id))
            
            // console.log('param items', items)
            // dispatch(productDetails(parseInt(id)));
            console.log('props',id)
      
            
    //  console.log('detailed',detailedProduct.product)

    },[])
    
  //  const { product, loading, error } = detailedProduct;
      
  const navigate = useNavigate();

  

   

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
                    <button onClick={() => loadCurrentItem(product)}>View Item</button>
                    
                    {/* </Link> */}
                  <div className="m-2 mx-auto">
                        <h5 className="mx-auto">{product.name}</h5>
                        <span className="m-2">{product.price /10000}</span>
                        <Link to="#yirga" className="btn btn-primary "  onClick={()=>addToCart(product._id, qty)}>
                        Add to cart
                        </Link>
                      
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
  addToCart:(id) => dispatch(addToCart(id)),
  loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  removeFromCart:(cartItems)=>(removeFromCart(cartItems)),
  fetchOrders:()=>(fetchOrders()),
  createOrders:(orders)=>(createOrders(orders)),
  clearOrders:(orders)=>(clearOrders(orders)),
  fetchUsers: () => (fetchUsers()),
 signin: (userSignin) => (signin(userSignin)),
 productDetails : () => (productDetails ()),
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);