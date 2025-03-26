import React from "react";
import { Link } from "react-router-dom";

const LinkTurn = ({ idTurno }) => {
  return (
    <Link
      className="mt-auto btn btn-primary"
      to={`/pagina-de-turnos/${idTurno}`}
    >
      Turno
    </Link>
  );
};

export default LinkTurn;
