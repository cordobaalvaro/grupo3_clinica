import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CarouselComponent from "../components/ui/CarouselComponent";
import SpecialistComponent from "../components/layout/specialistComponent/SpecialistComponent";
import ContactPage from "../components/layout/contactComponent/ContactComponent";

import { imagenesCarouselFormulario } from "../database/imagenesServidor";
import especialistasApi from '../database/apiServicios.json'

const HomePage = () => {
  return (
    <>
      <CarouselComponent
        idCarousel="carouselhome"
        carouselReutilizable={imagenesCarouselFormulario}
      />
      <Container>
        <Row className="mt-3 d-flex justify-content-center">
            { especialistasApi.map((especialista, index) => (
              <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={3} className="mb-3" key={index}>
                <SpecialistComponent
                  imagePerfil={especialista.imagePerfil}
                  nombre={especialista.nombre}
                  description={especialista.descripcionCard}
                  idEspecialist={especialista.nombre}
                />
              </Col>
            ))
            }
          </Row>
        </Container>
    </>
  );
};

export default HomePage;
