import React,{useState, useEffect} from 'react'
import {BrowserRouter , Route, Routes , useLocation, Outlet, useNavigate, useParams,matchPath} from "react-router-dom";
import Navbar from './Navbar';
import Header  from './Header';
import Item from './Items';
import Footer from './Footer';
import About from './About';
import Cart from './Cart';
import Contact from './Contact';
import Home from "./Home";
import Products from "./Products";
import SignIn from './SignIn';
import SignUp from './Signup';
import Order from './Order';
import Shipping from './Shipping';
import Product from './Product';
import { connect, useDispatch } from 'react-redux';
import {fetchProducts, addToCart, removeFromCart,fetchOrders, createOrders, clearOrders,fetchUsers, signin }  from '../redux/ActionCreators';
// import {auth, getToken} from '../middleware/auth';
// import '../config';


const mapStateToProps = state => {
 
  return {
      products: state.products,
      cartItems : state.cart.cartItems,
      orders: state.order.order,
   
      userSignin: state.userSignin
     
      
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
 signin: (userSignin) => (signin(userSignin)),
  
}


const  Main =( {products, cartItems, addToCart,removeFromCart,fetchOrders ,createOrders,clearOrders, orders, userSignin, login,userSignout})=> {

// const secret = config.get('jwtSecret')
//  var token = window.localStorage.getItem(secret);
//         if (token) {
//             // token = JSON.parse(window.localStorage.getItem(token));
//             console.log('main main main', token)
//         }
  // const productId = props.match.params.id;
  // const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
// const [coffeeVarieties, setCoffeeVarieties] = useState([])
// const [cartItems, setCartItems ] = useState([]);
// const userInfo  =  localStorage.getItem('token') || [];
// const initialState = {
//   userSignin :{userInfo}
// }
const {user} = userSignin;

const dispatch = useDispatch();


 useEffect(()=>{
dispatch(fetchProducts(products))
dispatch(fetchUsers())
// dispatch(fetchOrders())




  
    

console.log('token from main new',user)
  console.log('ord from main' ,orders)
// console.log('cartItems',cart)

}, []);


 

// const fetchData = async () =>{

// const {data} = await axios.get('http://localhost:5000/shop')
 
//  console.log('products main',products)
  // .then(res =>setCoffeeVarieties(res.data) )
  //  setCartItems(products);
  // .catch(error =>console.log(error))
  
//}
//fetchData()


  

// 
  // dispatch(addToCart())

//}
// const onRemove = (product) => {
//   const exist = cartItems.find((x) => x.id === product.id);
//   if (exist.qty === 1) {
//     setCartItems(cartItems.filter((x) => x.id !== product.id));
//   } else {
//     setCartItems(
//       cartItems.map((x) =>
//         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
//       )
//     );
//   }
// };

// const onAdd = (product)=>{
//   const exist = cartItems.find((x) => x.id === product.id);
//   if(exist){
//    products.map((x) =>
//      x.id === product.id ? {...exist, qty:exist.qty + 1 } : x);
//   }
//   else{
//     setCartItems([...products, {...product, qty:1}])
//   }

// }
// const onRemove = (product) => {
//   const exist = products.find((x) => x.id === product.id);
//   if (exist.qty === 1) {
//     setCartItems(products.filter((x) => x.id !== product.id));
//   } else {
//     setCartItems(
//      products.map((x) =>
//         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
//       )
//     );
//   }
// };

// const CustomWrapper = ({ isLoggedIn, ...props }) => {
//   const location = useLocation();
//   return isLoggedIn? (
//     <Outlet />
//   ) : (
//     <Navigate
//       to={`/signin/${location.search}`}
//       replace
//       state={{ location }}
//     />
//   )
// };
// const data  = products.products.map(product =>{
//   <div>{product}</div>
// })

  return (
    // const {userSignin, login, userInfo} = props
    <React.Fragment>
      {/* <Navbar  countCartItems={cartItems.length} cartItems={cartItems}/> */}
        <Navbar userSignin={userSignin} userSignout={userSignout}  login={login} fetchUsers={fetchUsers} userInfo={user} />
     
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          
       
          <Route exact path="/about" element={<About />}/> 
          <Route exact path="/contact" element={<Contact />}/>
          
          <Route  path="/shop" element={<Products  cartItems={cartItems} products={products} addToCart={addToCart} 
          removeFromCart={removeFromCart}
          fetchOrders={fetchOrders}
          createOrders={createOrders}
          clearOrders={clearOrders} 
          orders ={orders } />
              }/>
          <Route exact path="/shop/:id" element={<Product   /> } />
          {/* cartItems={cartItems} addToCart={addToCart } products={products} */}
          {/* <Route  path="/shop/:id" element={<Item cartItems={cartItems} products={products} />} /> */}
         
          {/* <Route  path="/products" element={<Shop onAdd={onAdd} onRemove={onRemove} coffeeVarieties={coffeeVarieties} cartItems={cartItems}/>} />
          <Route  path="/products/:id" element={<Shop onAdd={onAdd} onRemove={onRemove} coffeeVarieties={coffeeVarieties} cartItems={cartItems}/>} /> */}
          {/* <Route path="" element={<CustomWrapper isLoggedIn={isLoggedIn} />} >
        
          </Route> */}
          {/* <Route path="/cart/:id?" element={<Cart />} /> */}
          <Route exact path="/items" element={ <Item  products={products} cartItems={cartItems}/>}/>
          <Route exact path="/signin" element={ <SignIn />}/>
          <Route exact path="/signup" element={ <SignUp />}/>
          <Route exact path="/orders" element={ <Order/>}/>
          <Route exact path="/shipping" element={<Shipping/>} />
          <Route exact path="/cart" element={<Cart /> }/>



         


     </Routes>
      </React.Fragment>
    
    
 
  
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);