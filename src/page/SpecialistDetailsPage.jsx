import { useEffect, useState } from 'react';
import { Link, Links, NavLink, useParams } from 'react-router-dom';
import especialistasData from '../database/apiServicios.json'
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap';

const SpecialistDetailsPage = () => {
  const { nombre } = useParams();
  const nombreFormateado = nombre.replace(/_/g, " ");
  const [especialista, setEspecialista] = useState(null);

  useEffect(() => {
    const obtenerEspecialista = () => {
      const encontrado = especialistasData.find((esp) => esp.nombre === nombreFormateado);
      setEspecialista(encontrado || null);
    };

    obtenerEspecialista();
  }, [nombre]);

  if (!especialista) {
    return <p>Cargando o especialista no encontrado...</p>;
  }



  return (
    <div>
      <div
        className="position-relative text-white text-center"
        style={{
          backgroundImage: `url(${especialista.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 className="fw-bold">{especialista.nombre}</h1>
        </div>
      </div>

      <div className="container mt-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to={"/"}>Inicio</Link></li>
            <li className="breadcrumb-item"><Link to={"/"}>Servicios Médicos</Link></li>
            <li className="breadcrumb-item"><Link to={"/"}>Especialidadeses</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{especialista.nombre}</li>
          </ol>
      </div>

      <Container className="py-4">
        <Row className='d-flex justify-content-between align-items-center'>
          <Col>
            <h2 className="text-primary fw-bold">{especialista.nombre}</h2>
            {especialista.descripcion.map((item, index) => (
              <p key={index} className="text-muted text-justicado">{item.parrafo}</p>
            ))}
          </Col>
          <Col className='mx-auto text-center'>
            <Card>
              <Card.Img variant="top" src={especialista.imagePerfil} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
              <Card.Body>
                {/* especialista es el props a usar */}
                {/* <Button className="fw-bold" onClick={() => ira(campo.especialidad, campo.medico, campo.imagen)} variant="primary">Turno</Button> */}
                <Link to={`/turnos-especialidades/${nombre}`} className='btn btn-primary'>sacar turno</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SpecialistDetailsPage