import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "./CarouselComponent.css";

const CarouselComponent = ({ carouselReutilizable, idCarousel }) => {
  return (
    <Carousel className="img-fluid ">
      {carouselReutilizable.map((imagen, index) => (
        <Carousel.Item interval={3000} key={index}>
          {idCarousel === "carouselregister" && (
            <img
              className="d-block w-100 rounded shadow"
              src={imagen}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "600px" }}
            />
          )}
          {idCarousel === "carouselhome" && (
            <div
              className="parallax-slide "
              style={{ backgroundImage: `url(${imagen})` }}
            >
              <div className="container-fluid parallax-content d-flex justify-content-center align-items-center ">
                <div className="mover-derecha mover-izquierda">
                  <h2>Titulo 1</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem
                  </p>
                  <Button variant="primary" className="me-3 mb-3">
                    Primary
                  </Button>
                  <Button variant="success" className=" mb-3">
                    Success
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
