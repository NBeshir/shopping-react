import React, { Component } from "react";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeVarieties: [],
    };
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark mt-20" id="navigation">
          <a class="navbar-brand" href="../index.html">
            <img src="./images/logo.png" class="logo" alt="Website Logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item active">
                <a
                  class="nav-link text-white"
                  href="index.html"
                  data-value="home"
                >
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div class="loader">
          <div class="inner"></div>
        </div>

        <div class="container content-section mx-auto">
          <div class="row mt-5 shop-items">
            {items.coffee.forEach((item) => {
              <div
                class="col col-md-4 mb-5 d-flex justify-content-center shop-item"
                data-item-id={item.id}
              >
                <div class="card" style="width: 18rem">
                  <img
                    class="card-img-top shop-item-image"
                    src={item.imageName}
                    alt="Card image cap"
                  />
                  <div class="card-body item-details">
                    <h5 class="card-title shop-item-title">{item.name}</h5>
                    <span class="card-text shop-item-price">{item.price}</span>
                    <a href="#yirga" class="btn btn-primary shop-item-button">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>;
            })}
          </div>
        </div>

        <div class="container mt-5" id="yirga">
          <h2 class="section-header text-center" id="limu">
            CART <i class="fa fa-shopping-cart"></i>
          </h2>
          <div class="row cart-row mt-5" id="harar">
            <span
              class="col cart-item cart-header cart-column text-center"
              id="jinka"
            >
              ITEM
              <hr />
            </span>

            <span
              class="col cart-price cart-header cart-column text-center"
              id="sida"
            >
              PRICE
              <hr />
            </span>

            <span
              class="col cart-quantity cart-header cart-column text-center"
              id="kaffa"
            >
              QUANTITY
              <hr />
            </span>
          </div>
          <div class="cart-items"></div>
          <hr />
          <div class="cart-total">
            <strong class="cart-total-title">Total</strong>
            <span class="cart-total-price">$0</span>
          </div>
          <button
            class="btn btn-primary btn-purchase"
            id="btn-purchase"
            type="button"
          >
            PURCHASE
          </button>
        </div>

        <footer class="text-center text-lg">
          <div class="container p-4">
            <div class="row footerBox loginFooter">
              <div class="col-6 col-sm-5 text-center">
                <h5 class="text-uppercase">Follow Us</h5>

                <a
                  class="btn btn-social-icon btn-instagram"
                  href="http://instagram.com/"
                >
                  <i class="fa fa-instagram"></i>
                </a>
                <a
                  class="btn btn-social-icon btn-facebook"
                  href="http://facebook.com/"
                >
                  <i class="fa fa-facebook"></i>
                </a>
                <a
                  class="btn btn-social-icon btn-twitter"
                  href="http://twitter.com/"
                >
                  <i class="fa fa-twitter"></i>
                </a>
              </div>
              <div class="col-sm-3 text-center">
                <h5>Call Us</h5>
                <a
                  class="btn btn-social-icon btn-phone"
                  href="tel:+1-877-538-5888"
                >
                  <i class="fa fa-phone"></i>
                </a>
              </div>

              <div class="col-sm-3 text-center">
                <h5>Email Us</h5>
                <a
                  href="mailto: Naturecoffee@gmail.com"
                  class="fa fa-envelope-o"
                >
                  Naturecoffee@gmail.com
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Shop;
