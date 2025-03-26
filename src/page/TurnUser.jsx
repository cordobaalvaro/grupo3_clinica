import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2"; // Asegúrate de que `Swal` esté importado

import especialistasData from "../database/apiServicios.json";

const TurnUser = () => {
  const { nombre } = useParams();
  const navega = useNavigate();
  const [usados, setUsados] = useState([]);
  const [horaturno, setHoraturno] = useState("");
  const [verhoras, setVerhoras] = useState(false);
  const [fechaturno, setFechaturno] = useState("");
  const [listadeturnos, setListadeturnos] = useState([]);
  const [turnoEspecialista, setTrunoEspecialista] = useState(null);

  const nombreFormateado = nombre.replace(/_/g, " ");

  const usuarioLs = JSON.parse(localStorage.getItem("usuarios")) || [];
  // Asegúrate de que hay un usuario logueado
  const usuarioLogueado = usuarioLs.length > 0 ? usuarioLs[0] : null;

  useEffect(() => {
    const obtenerEspecialista = () => {
      const encontrado = especialistasData.find(
        (esp) => esp.nombre === nombreFormateado
      );
      setTrunoEspecialista(encontrado || null);
    };

    obtenerEspecialista();
  }, [nombreFormateado]);

  useEffect(() => {
    setListadeturnos(JSON.parse(localStorage.getItem("datosturno") || "[]"));
  }, []);

  if (!turnoEspecialista) {
    return <p>Cargando o especialista no encontrado...</p>;
  }

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
      id: usuarioLogueado ? usuarioLogueado.id : "usuario no encontrado",
      idTurno: Date.now(),
      medico: turnoEspecialista.medicos[0].nombreMedico, // Puedes reemplazar esto con el nombre real
      paciente: usuarioLogueado
        ? usuarioLogueado.nameUser
        : "Usuario no encontrado", // Nombre del usuario logueado o un mensaje de error si no está,
      especialidad: turnoEspecialista.nombre,
      fechaturno: fechaturno,
      horaturno: horaturno,
      estado: "espera",
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
        turno.fechaturno === nuevaFecha &&
        turno.especialidad === turnoEspecialista.nombre
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
      <Row>
        <Col xs={12} sm={8} md={6} lg={5} className="mb-3">
          <Card className="text-left">
            <Card.Body className="bg-light">
              <Card.Img
                variant="top"
                src={turnoEspecialista.image}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  marginBottom: "10px",
                }}
              />
              <Card.Title>
                Especialidad:&nbsp;{turnoEspecialista.nombre}
              </Card.Title>
              <Card.Text>
                Profesional:&nbsp;{turnoEspecialista.medicos[0].nombreMedico}
              </Card.Text>
              <hr />
              <Form.Group className="mb-3">
                <Form.Label>Fecha Turno</Form.Label>
                <Form.Control
                  className="mb-2"
                  size="sm"
                  type="date"
                  value={fechaturno}
                  onChange={elijefecha}
                />
              </Form.Group>
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
};

export default TurnUser;
