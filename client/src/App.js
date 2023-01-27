import React, { Fragment , useEffect} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import About from "./components/About";
import Carousel from "./components/CarouselComponent";
import Contact from "./components/Contact";
import Main from "./components/Main";
import { Provider } from 'react-redux';
import {BrowserRouter , Route, Routes } from "react-router-dom";
import  store  from './redux/store';


//const store = ConfigureStore();




const App = () => {

  
  return (
    <Provider store={store}>
   
      <BrowserRouter>
        <Main/>
      
      </BrowserRouter>
   

   
  
        </Provider>
   


  )
}
export default App;
