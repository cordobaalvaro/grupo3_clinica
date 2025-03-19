import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "./CarouselComponent.css";
import { useNavigate } from "react-router-dom";

const CarouselComponent = ({ carouselReutilizable, idCarousel }) => {
  const navigate = useNavigate();
  const hanldeClickButtonCarousel = () => {
    setTimeout(() => {
      navigate("/registerpage");
    }, 1000);
  };
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
                  <Button
                    variant="primary"
                    onClick={hanldeClickButtonCarousel}
                    className="me-3 mb-3"
                  >
                    Registrate
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
