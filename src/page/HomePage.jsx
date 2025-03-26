import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CarouselComponent from "../components/ui/CarouselComponent";
import SpecialistComponent from "../components/layout/specialistComponent/SpecialistComponent";
import ContactPage from "../components/layout/contactComponent/ContactComponent";

import especialistasApi from "../database/apiServicios.json";
import ContactComponent from "../components/layout/contactComponent/ContactComponent";
import SobreNosotrosComponent from "../components/layout/sobreNosotros/SobreNosotrosComponent";

const HomePage = () => {
  return (
    <>
      <CarouselComponent
        idCarousel="carouselhome"
        carouselReutilizable={especialistasApi}
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
                idTurno={especialista.nombre}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <SobreNosotrosComponent/>
      <ContactComponent />
    </>
  );
};

export default HomePage;