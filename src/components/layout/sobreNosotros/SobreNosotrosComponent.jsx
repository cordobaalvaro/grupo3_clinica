import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SobreNosotrosData from "../../../database/sobreNosotrosData";
import "./SobreNosotrosComponent.css";

const SobreNosotrosComponent = () => {
  const navigate = useNavigate();

  const handleCardClick = id => {
    navigate(`/especialista/${id}`);
  };

  return (
    <Container className='py-5 sobre-nosotros-container'>
      <h2 className='text-center mb-5 section-title'>
        Conoce a nuestros especialistas
      </h2>

      <Row className='g-4 justify-content-center'>
        {SobreNosotrosData.map(especialista => (
          <Col
            key={especialista.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className='d-flex align-items-stretch'
          >
            <Card
              className='h-100 especialista-card shadow-sm border-0'
              onClick={() => handleCardClick(especialista.id)}
              role='button'
            >
              <div className='image-wrapper'>
                <Card.Img
                  variant='top'
                  src={especialista.imagen}
                  alt={especialista.nombre}
                  className='especialista-img'
                />
              </div>
              <Card.Body className='d-flex flex-column'>
                <Card.Title className='mb-1'>{especialista.nombre}</Card.Title>
                <Card.Subtitle className='mb-3 text-muted'>
                  {especialista.especialidad}
                </Card.Subtitle>
                <Card.Text className='flex-grow-1'>
                  {especialista.descripcion}
                </Card.Text>
                <div className='ver-perfil mt-auto'>Ver perfil completo →</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SobreNosotrosComponent;
