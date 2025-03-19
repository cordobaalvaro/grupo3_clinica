import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CarouselComponent from "../components/ui/CarouselComponent";
import SpecialistComponent from "../components/layout/specialistComponent/SpecialistComponent";
import ContactPage from "../components/layout/contactComponent/ContactComponent";

import { imagenesCarouselFormulario } from "../database/imagenesServidor";
import especialistasApi from "../database/apiServicios.json";

const HomePage = () => {
  return (
    <>
      <CarouselComponent
        idCarousel="carouselhome"
        carouselReutilizable={imagenesCarouselFormulario}
      />
      <Container>
        <Row>
          {especialistasApi.map((especialista, index) => (
            <Col md={4} className="mb-4" key={index}>
              <SpecialistComponent
                imagePerfil={especialista.imagePerfil}
                nombre={especialista.nombre}
                description={especialista.descripcionCard}
                idEspecialist={especialista.nombre}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
