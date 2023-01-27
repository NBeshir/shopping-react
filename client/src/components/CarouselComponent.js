import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function CarouselComponent() {
  return (
    <Carousel className="w-50 mx-auto ">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/rawCoffee.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Row Coffee Beans</h3>
          <p>Freshly collected coffee beans direct from the farm.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/coffeebeans.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Row Coffee Beans</h3>
          <p>Freshly collected coffee beans direct from the farm.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/coffeewash.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>People washing coffee</h3>
          <p>
           Our coffee is thoroughly washed for your safety.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;