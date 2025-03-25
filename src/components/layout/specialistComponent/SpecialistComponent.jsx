import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import especialistasApi from "../../../database/apiServicios.json";

const SpecialistComponent = ({
  imagePerfil,
  nombre,
  description,
  idEspecialist,
}) => {
  return (
    <>
      <Card className="text-left">
        <Card.Img
          variant="top"
          src={imagePerfil}
          style={{ width: "100%", height: "150px", objectFit: "cover" }}
        />
        <Card.Body className="bg-light">
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {description} {nombre}
          </Card.Text>
          {/* <Button
            className="fw-bold"
            onClick={() => ira(campo.especialidad, campo.medico, campo.imagen)}
            variant="primary"
          >
            Turno
          </Button> */}
          <Link
            to={`/detalle-especialista/${idEspecialist.replace(/ /g, "_")}`}
            className="btn btn-primary"
          >
            Ver más
          </Link>
          <Link
            to={`/detalle-especialista/${idEspecialist.replace(/ /g, "_")}`}
            className="btn btn-success"
          >
            Turno
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default SpecialistComponent;
