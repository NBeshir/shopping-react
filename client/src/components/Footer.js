import React from "react";

const Footer = () => {
  return (
    <footer class="text-center text-lg">
      <div class="container p-4">
        <div class="row footerBox">
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
            <a class="btn btn-social-icon btn-phone" href="tel:+1-877-538-5888">
              <i class="fa fa-phone"></i>
            </a>
          </div>

          <div class="col-sm-3 text-center">
            <h5>Email Us</h5>
            <a href="mailto: Naturecoffee@gmail.com" class="fa fa-envelope-o">
              Naturecoffee@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
