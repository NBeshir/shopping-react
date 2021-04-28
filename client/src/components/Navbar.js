import React from "react";
import { Router, Route, Switch } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
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
              <a className="nav-link" href="#">
                <i className="fa fa-home fa-lg"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                <i className="fa fa-info fa-lg"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#values">
                <i className="fa fa-list fa-lg"></i> Our Values
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <i className="fa fa-address-card fa-lg"></i> Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shop">
                <i className="fa fa-address-card fa-lg"></i> Shop
              </a>
            </li>
          </ul>
          <span className="navbar-text ml-auto">
            <a href="#" role="button" id="loginButton">
              <i className="fa fa-sign-in"></i> Sign In
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
