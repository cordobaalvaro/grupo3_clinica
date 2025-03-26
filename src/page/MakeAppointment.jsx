import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Card,
  Container,
  Row,
  Col,
  ListGroup,
  Accordion,
  Badge,
  Alert,
} from "react-bootstrap";
import especialistasData from "../database/apiServicios.json";
import "bootstrap/dist/css/bootstrap.min.css";
import LinkTurn from "../components/ui/LinkTurn";

const MakeAppointment = () => {
  document.title = "Pagina de Turnos";

  const [consultasPorEspecialidad, setConsultasPorEspecialidad] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener consultas de localStorage
    const consultas = JSON.parse(localStorage.getItem("datosturno")) || [];

    // Agrupar consultas por especialidad
    const agrupadas = consultas.reduce((acc, consulta) => {
      const { especialidad } = consulta;
      if (!acc[especialidad]) {
        acc[especialidad] = [];
      }
      acc[especialidad].push(consulta);
      return acc;
    }, {});

    setConsultasPorEspecialidad(agrupadas);
  }, []);

  // const medicos = [
  //   {
  //     imagen: "traumatologia.jpeg",
  //     especialidad: "Traumatología",
  //     medico: "Silvia Trauma",
  //   },
  //   {
  //     imagen: "psicologia.jpeg",
  //     especialidad: "Servicio de Psicología",
  //     medico: "Rodrigo CasaGrande",
  //   },
  //   // ... otros médicos
  // ];

  const handleNavegar = (especialidad, medico, imagen) => {
    localStorage.setItem("especialidad", especialidad);
    localStorage.setItem("medico", medico);
    localStorage.setItem("imagen", imagen);
    navigate("/turnos");
  };

  return (
    <Container className="py-4">
      {/* Sección de médicos disponibles */}
      <h2 className="text-center mb-4">Nuestros Especialistas</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {especialistasData.map((medico, index) => (
          <Col key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={medico.imagePerfil}
                style={{ height: "180px", objectFit: "cover" }}
                alt={medico.nombre}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{medico.nombre}</Card.Title>
                <Card.Text className="text-muted">
                  Dr. {medico.nameMedico}
                </Card.Text>
                <LinkTurn idTurno={medico.nombre} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Sección de consultas por especialidad */}
      <h2 className="text-center mt-5 mb-4">
        Turnos Agendados por Especialidad
      </h2>

      {Object.keys(consultasPorEspecialidad).length > 0 ? (
        <Accordion defaultActiveKey="0" className="mb-5">
          {Object.entries(consultasPorEspecialidad).map(
            ([especialidad, consultas], index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>
                  <span className="fw-bold">{especialidad}</span>
                  <Badge bg="info" className="ms-2">
                    {consultas.length} turno{consultas.length !== 1 ? "s" : ""}
                  </Badge>
                </Accordion.Header>
                <Accordion.Body>
                  <ListGroup variant="flush">
                    {consultas.map((consulta, idx) => (
                      <ListGroup.Item key={idx}>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <strong>Paciente:</strong> {consulta.paciente}
                            <br />
                            <strong>Fecha:</strong> {consulta.fechaturno} -{" "}
                            {consulta.horaturno}
                          </div>
                          <div className="text-end">
                            <small className="text-muted d-block">
                              Dr. {consulta.medico}
                            </small>
                            <Badge bg="secondary">ID: {consulta.id}</Badge>
                          </div>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            )
          )}
        </Accordion>
      ) : (
        <Alert variant="info" className="text-center">
          No hay turnos agendados todavía.
        </Alert>
      )}
    </Container>
  );
};

export default MakeAppointment;
