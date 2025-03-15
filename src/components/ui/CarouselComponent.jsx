import React from 'react'
import { Carousel } from 'react-bootstrap';

const CarouselComponent = ({carouselReutilizable}) => {
  return (
    <Carousel className="img-fluid rounded shadow">
      {carouselReutilizable.map((imagen, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={imagen} alt={`Slide ${index + 1}`} style={{ width: "100%", height: "600px" }} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};


export default CarouselComponent