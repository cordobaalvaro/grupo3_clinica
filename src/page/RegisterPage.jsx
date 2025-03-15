import { Container, Row, Col, Card, CardBody } from "react-bootstrap";
import RegisterForm from "../components/forms/RegisterForm";
import CarouselComponent from "../components/ui/CarouselComponent";

import { imagenesCarouselFormulario } from '../database/imagenesServidor'

const RegisterPage = () => {
  return (
    <Container fluid className="vh-100 bg-dark d-flex justify-content-center align-items-center">
      <Row className="w-100 d-flex justify-content-center">
        <Col md={6} className="d-none d-md-flex align-items-center justify-content-center">
          <CarouselComponent carouselReutilizable={imagenesCarouselFormulario} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card className="p-4 shadow-lg">
            <CardBody>
              <h2 className="text-center mb-4">Registro</h2>
              <RegisterForm />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
