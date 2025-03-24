import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';



function Medicos() {

  useEffect(() => {
    const turnos = JSON.parse(localStorage.getItem('datosturno')) || [];
    if (turnos.length == 0)
      localStorage.setItem('datosturno', JSON.stringify([]))
  }, [])

  const navega = useNavigate()

  const datos = [{
    imagen: "traumatologia.jpeg",
    especialidad: "Traumatologia",
    medico: "Silvia Trauma"
  },
  {
    imagen: "psicologia.jpeg",
    especialidad: "Psicologia",
    medico: "John Psico"
  },
  {
    imagen: "pediatria.jpeg",
    especialidad: "Pediatria",
    medico: "Jose Pedi"
  },
  {
    imagen: "odontologia.jpeg",
    especialidad: "Odontologia",
    medico: "Juan Odonto"
  },
  {
    imagen: "nutricionista.jpeg",
    especialidad: "Nutricion",
    medico: "Esteban Nutri"
  },
  {
    imagen: "neurologia.jpeg",
    especialidad: "Neurologia",
    medico: "Marcelo Neuro"
  },
  {
    imagen: "medico_gral.jpeg",
    especialidad: "Medicina Gral.",
    medico: "Marcos Gral"
  },
  {
    imagen: "ginecologia.jpeg",
    especialidad: "Ginecologia",
    medico: "Fabina Gine"
  },
  {
    imagen: "dermatologia.jpeg",
    especialidad: "Dermatologia",
    medico: "Marcela Derma"
  },
  {
    imagen: "cardiologia.jpeg",
    especialidad: "Cardiologia",
    medico: "Guille Cardio"
  }
  ]
  function ira(especialidad, medico, imagen) {

    localStorage.setItem("especialidad", especialidad)
    localStorage.setItem("medico", medico)
    localStorage.setItem("imagen", imagen)
    navega("/turnos")
  }

  return (
    <>

      <Container>
        <Row className="mt-3">
          {datos.map((campo, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
              <Card className="text-left">
                <Card.Img variant="top" src={campo.imagen} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                <Card.Body className="bg-light">
                  <Card.Title>{campo.especialidad}</Card.Title>
                  <Card.Text>{campo.medico}</Card.Text>
                  <Button className="fw-bold" onClick={() => ira(campo.especialidad, campo.medico, campo.imagen)} variant="primary">Turno</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

    </>
  )
}

export default Medicos
