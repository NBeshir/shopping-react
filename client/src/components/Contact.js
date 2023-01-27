import React from 'react'

const Contact =()=> {
  return (

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
</div>
 
    
  )
}

export default Contact;


{/* <div className="container">

<div className="row row-content">
        
        <div className="col-md-8 mx-auto">
          <div
            id="homeCarousel"
            className="carousel slide  "
            data-ride="carousel"
          > */}
                {/* <ol className="carousel-indicators">
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
            </ol> */}
            // <div className="carousel-inner">
            //       <div className="carousel-item active">
            //         <img
            //           className="d-block w-100 img-fluid "
            //           src="../images/coffeebeans.jpg"
            //           alt="First slide"
            //         />
            //       </div>
            //       <div className="carousel-item">
            //         <img
            //           className="d-block w-100 img-fluid"
            //           src="../images/coffeewash.jpg"
            //           alt="Second slide"
            //         />
            //       </div>
            //       <div className="carousel-item">
            //         <img
            //           className="d-block w-100 img-fluid"
            //           src="../images/rawCoffee.jpg"
            //           alt="Third slide"
            //         />
            //       </div>
            // </div>

         {/* <a
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
         </a> */}
//        </div>
//      </div>
// </div>
// </div>