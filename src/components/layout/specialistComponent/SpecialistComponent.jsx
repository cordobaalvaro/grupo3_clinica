import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SpecialistComponent = ({
  imagePerfil,
  nombre,
  description,
  idEspecialist,
  idTurno,
}) => {
  return (
    <>
      <Card className="text-left">
        <Card.Img variant="top" src={imagePerfil} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
        <Card.Body className="bg-light">
          <Card.Title>{nombre}</Card.Title>
          <Card.Text> {description} {nombre} </Card.Text>
          <Link to={`/detalle-especialista/${idEspecialist.replace(/ /g, "_")}`} className="btn btn-primary" > Ver más </Link>
          <Link to={`/pagina-de-turnos/${idTurno.replace(/ /g, "_")}`} className="btn btn-success ms-3">Turno</Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default SpecialistComponent;
