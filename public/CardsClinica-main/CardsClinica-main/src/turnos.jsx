import { useLocation, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

function Turnos() {
  const [fechaturno, setFechaturno] = useState("");
  const [horaturno, setHoraturno] = useState("");
  const [listadeturnos, setListadeturnos] = useState([]);
  const [verhoras, setVerhoras] = useState(false);
  const [usados, setUsados] = useState([]);
  const [especialidad, setEspecialidad] = useState("");
  const [medico, setMedico] = useState("");
  const [imagen, setImagen] = useState("");

  const navega = useNavigate();

  useEffect(() => {
    setListadeturnos(JSON.parse(localStorage.getItem("datosturno") || "[]"));
    setEspecialidad(localStorage.getItem("especialidad") || "");
    setMedico(localStorage.getItem("medico") || "");
    setImagen(localStorage.getItem("imagen") || "");
  }, []);

  const turnos = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00"];

  function grabaturno() {
    if (fechaturno === "") {
      Swal.fire("Debe seleccionar fecha");
      return;
    }
    if (horaturno === "") {
      Swal.fire("Debe seleccionar hora");
      return;
    }

    const nuevoTurno = {
      //id:
      medico: medico,
      paciente: "Paciente prueba",
      especialidad: especialidad,
      fechaturno: fechaturno,
      horaturno: horaturno,
    };

    const nuevosTurnos = [...listadeturnos, nuevoTurno];
    setListadeturnos(nuevosTurnos);
    localStorage.setItem("datosturno", JSON.stringify(nuevosTurnos));

    Swal.fire("Turno seleccionado");
    setHoraturno("");
    navega("/");
  }

  function elijefecha(e) {
    setHoraturno("");
    const nuevaFecha = e.target.value;
    setFechaturno(nuevaFecha);

    // Filtramos los turnos ocupados
    const turnosOcupados = listadeturnos.filter(
      (turno) =>
        turno.fechaturno === nuevaFecha && turno.especialidad === especialidad
    );

    setUsados(turnosOcupados);
    setVerhoras(true);
  }

  // Calcular qué turnos están ocupados ANTES del render
  const turnosActualizados = turnos.map((pepe) => ({
    hora: pepe,
    deshabilitado: usados.some((turno) => turno.horaturno === pepe),
  }));

  return (
    <Container>
      <Row className="mt-3 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={5} className="mb-3">
          <Card className="text-left">
            <Card.Body className="bg-light">
              <Card.Img
                variant="top"
                src={imagen}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  marginBottom: "10px",
                }}
              />
              <Card.Title>Especialidad:&nbsp;{especialidad}</Card.Title>
              <Card.Text>Profesional:&nbsp;{medico}</Card.Text>
              <hr />
              <Form.Group className="mb-3">
                <Form.Label>FechaTurno</Form.Label>
                <Form.Control
                  className="mb-2"
                  size="sm"
                  type="date"
                  value={fechaturno}
                  onChange={elijefecha}
                />
              </Form.Group>
              <hr />
              {turnosActualizados.map((turno, index) => (
                <Form.Check
                  key={index}
                  name="turnos"
                  type="radio"
                  label={turno.hora}
                  value={turno.hora}
                  disabled={turno.deshabilitado}
                  checked={horaturno === turno.hora}
                  onChange={(e) => setHoraturno(e.target.value)}
                />
              ))}
              <Button
                className="mt-3 fw-bold"
                onClick={grabaturno}
                variant="primary"
              >
                Guardar Turno
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Turnos;
