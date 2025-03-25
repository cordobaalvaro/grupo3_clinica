import React from "react";
import TurnUser from "./TurnUser";
import { useParams } from "react-router-dom";

const MedicalAppointment = () => {
  const { nombre } = useParams;
  return (
    <>
      <TurnUser idTurno={nombre} />
      <h1>Pagina Medical</h1>
    </>
  );
};

export default MedicalAppointment;
