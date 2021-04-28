import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Navbar />
        <Home />
        <Footer />
        <Switch>
          <Route path="/shop" component={Shop} />
        </Switch>
      </Fragment>
    </Router>
  );
};
export default App;
