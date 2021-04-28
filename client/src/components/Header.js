import React from "react";

const Header = () => {
  return (
    <header class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row">
          <div class="col-4 col-sm-3 col-md-2 align-self-center">
            <img
              src="../images/logo.png "
              height="auto"
              width="100"
              class="image-fluid"
            />
          </div>

          <div class="col">
            <h1>Nature Coffee Importer</h1>

            <h2>A quality you trust</h2>
          </div>
          <div class="col-md-4 col-xl-2 mt-4">
            <a
              href="/shop"
              type="button"
              class="btn btn-info"
              id="reserveButton"
            >
              Order your coffee today
            </a>
          </div>
          <div id="google_translate_element" class="pl-5 mt-5"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
