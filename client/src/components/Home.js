import React, { Fragment } from "react";
// import "/images/coffeebeans.jpg";
// import "/images/coffeewash.jpg";
// import "/images/rawCoffee.jpg";
//import Carousel from "react-image-carousel";

// let images = [
//   "../images/coffeewash.jpg",
//   "../images/coffeebeans.jpg",
//   "../images/rawCoffee.jpg",
// ];
const Home = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              id="carouselExampleIndicators"
              className="carousel slide w-75 mx-auto"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100 img-fluid "
                    src="../images/coffeebeans.jpg"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100 img-fluid"
                    src="../images/coffeewash.jpg"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100 img-fluid"
                    src="../images/rawCoffee.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>

              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>

        <div className="row align-self-center aboutValue" id="about">
          <div className="col col-sm-6">
            <div className="card cardAbout mx-auto h-100 m-0 panel second">
              <div className="card-body">
                <h1 className="text-center card-header ">About Us</h1>
                <p className="card-text p-5 ">
                  We are a private company located in Pleasanton, CA. Our
                  Company imports quality coffee from Ethiopia, a country
                  located in the Eastern part of Africa. We bring your coffee
                  directly from the farmers at a fair price. We ship freshly
                  produced and washed coffee through freight and distribute it
                  to local roasters and coffee shops.
                </p>
              </div>
            </div>
          </div>

          <div className="col col-sm-6">
            <div
              className="card cardValues mx-auto h-100 m-0 panel third"
              id="values"
            >
              <div className="card-body">
                <h1 className="text-center card-header ">Our values</h1>
                <p className="card-text p-5 ">
                  Although we are a business and have to make profit, we also
                  have strongly held values. We believe that apart from making
                  money, we also have a purpose to serve people in our
                  community. We pay farmers a very fair price, make sure that
                  everyone involved in the washing and cleaning process is also
                  paid very fairly. Also after we brought the coffee to the USA,
                  we sell it at a very competitive price. We also give back to
                  our local charity organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container container-fluid">
        <div className="row row-content">
          <div className="card col d-flex p-5 img-fluid w-100 head text-center pb-0 panel first">
            <div className="card-body">
              <h5 className="card-title text-white">
                We Import Quality Coffee
              </h5>
              <p className="card-text text-white">
                <em>A wide variety of selections!</em>
              </p>
              <a href="#" role="button" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row formBox mt-5 p-5 panel fifth" id="contact">
          <div className="col-12">
            <h2 className="text-center font-weight-bold text-white">
              Contact Us
            </h2>
            <hr />
          </div>
          <div className="col-md-10">
            <form>
              <div className="form-group row">
                <label for="fName" class="col-form-label col-md-2 text-white">
                  First Name
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control p-3"
                    id="fName"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="lName"
                  className="col-form-label col-md-2 text-white"
                >
                  Last Name
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control p-3"
                    id="lName"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label for="email" class="col-form-label col-md-2 text-white">
                  Email address
                </label>
                <div className="col-md-10">
                  <input
                    type="email"
                    className="form-control p-3"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  for="message"
                  className="col-form-label col-md-2 text-white"
                >
                  Message
                </label>
                <div className="col-md-10">
                  <textarea
                    className="form-control form-control-lg"
                    id="message"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-10 offset-md-2 btn-lg">
                  <input
                    type="submit"
                    className="btn btn-secondary btn-block p-2"
                    value="Send"
                    name=""
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="card col  featured mx-auto">
        <img className="card-img-top" src="img/yirga.jpg" alt="advertisement" />
        <div className="card-body">
          <h5 className="card-title blink">Coming Soon...</h5>
          <p className="card-text">
            We are so excited to bring you Ethiopia's finest,
            <em>Yirgachaffe</em>
            very soon! Stay Tuned!
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
