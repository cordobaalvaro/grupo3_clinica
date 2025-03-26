import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import TurnUser from "./TurnUser";
import especialistasData from '../database/apiServicios.json';

const MedicalAppointment = () => {
  const { nombre } = useParams();
  const nombreFormateado = nombre.replace(/_/g, " ");
  const especialista = especialistasData.find(esp => esp.nombre === nombreFormateado);

  useEffect(() => {
    if (especialista) {
      document.title = "Turno " + especialista.servicioDe;
    }
  }, [especialista]); // Se ejecuta cuando `especialista` cambia

  return (
    <>
      <TurnUser idTurno={nombre} />
    </>
  );
};

export default MedicalAppointment;
