import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button, Row, Col, Card, Badge } from "react-bootstrap";
import sobreNosotrosData from "../../../database/sobreNosotrosData";
import "./SobreNosotrosDetalles.css";

const SobreNosotrosDetalles = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const especialista = sobreNosotrosData.find(
    especialista => especialista.id === parseInt(id)
  );

  if (!especialista) {
    return (
      <Container className='my-5 text-center'>
        <h3>Especialista no encontrado</h3>
        <Button
          variant='primary'
          onClick={() => navigate("/")}
          className='mt-3'
        >
          Volver al listado
        </Button>
      </Container>
    );
  }

  return (
    <Container className='my-5 py-4 especialista-detalle-container'>
      <Button
        variant='outline-primary'
        onClick={() => navigate(-1)}
        className='mb-4 back-button'
      >
        ← Volver a especialistas
      </Button>

      <Card className='border-0 shadow-sm mb-5'>
        <Row className='g-0'>
          <Col md={5} className='d-flex align-items-stretch'>
            <div className='image-container'>
              <Card.Img
                variant='top'
                src={especialista.imagen}
                alt={especialista.nombre}
                className='img-detalle'
              />
            </div>
          </Col>
          <Col md={7}>
            <Card.Body className='p-4'>
              <div className='d-flex justify-content-between align-items-start'>
                <div>
                  <Card.Title as='h2' className='mb-2'>
                    {especialista.nombre}
                  </Card.Title>
                  <Badge
                    bg='primary'
                    className='mb-3 especialista-especialidad'
                  >
                    {especialista.especialidad}
                  </Badge>
                </div>
              </div>

              <Card.Text className='mt-4'>
                <h5>Sobre el especialista</h5>
                <p className='text-muted'>{especialista.descripcion}</p>
              </Card.Text>
            </Card.Body>
            {/* {tabla-usuarioLogueado && rol === "admin" ? tabla : d-none} */}
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default SobreNosotrosDetalles;
