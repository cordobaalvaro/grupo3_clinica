import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const TableComponent = ({ idPage }) => {
  const [tablaTurno, setTablaTurno] = useState([]);

  const aprobar = (cita) => {
    Swal.fire({
      title: "¿Estas seguro de aprobar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aprobar",
    }).then((result) => {
      if (result.isConfirmed) {
        const esperaLS =
          JSON.parse(
            localStorage.getItem(
              idPage === "solicitud-trabajo" ? "solicitudes" : "datosturno"
            )
          ) || [];
        const aprobado = esperaLS.find((sol) =>
          idPage === "solicitud-trabajo" ? sol.id : sol.idTurno === cita
        );
        aprobado.estado = "aprobado";
        setTablaTurno(esperaLS);
        localStorage.setItem(
          idPage === "solicitud-trabajo" ? "solicitudes" : "datosturno",
          JSON.stringify(esperaLS)
        );
        Swal.fire({
          title: "Aprobado",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    const turnosUsuarios =
      JSON.parse(
        localStorage.getItem(
          idPage === "solicitud-trabajo" ? "solicitudes" : "datosturno"
        )
      ) || [];
    setTablaTurno(turnosUsuarios);
  }, [idPage]); // Se ejecuta cada vez que IdPage cambie

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedTurnos =
        JSON.parse(
          localStorage.getItem(
            idPage === "solicitud-trabajo" ? "solicitudes" : "datosturno"
          )
        ) || [];
      setTablaTurno(updatedTurnos);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [idPage]);

  if (tablaTurno.length === 0) {
    return (
      <p>
        No hay {idPage === "solicitud-trabajo" ? "solicitudes " : "turnos "}
        disponibles
      </p>
    );
  }

  return (
    <table className="w-full border-collapse border border-gray-300 mx-auto overflow-x-auto">
      <thead className="text-center">
        <tr className="bg-gray-200">
          <th className="border p-2">Nombre</th>
          <th className="border p-2">Especialidad</th>
          {idPage === "solicitud-trabajo" ? (
            <th className="border p-2">Correo</th>
          ) : (
            <th className="border p-2">Médico</th>
          )}
          {idPage === "solicitud-trabajo" ? (
            <th className="border p-2">Número de teléfono</th>
          ) : (
            <th className="border p-2">Fecha</th>
          )}
          {idPage === "solicitud-trabajo" ? (
            <th className="border p-2">CV</th>
          ) : (
            <th className="border p-2">Horario</th>
          )}
          <th className="border p-2">Estado</th>
        </tr>
      </thead>
      <tbody>
        {tablaTurno.map((cita) => (
          <tr
            key={idPage === "solicitud-trabajo" ? cita.id : cita.idTurno}
            className="text-center"
          >
            <td className="border p-2">
              {idPage === "solicitud-trabajo" ? cita.nombre : cita.paciente}
            </td>
            <td className="border p-2">{cita.especialidad}</td>
            <td className="border p-2">
              {idPage === "solicitud-trabajo" ? cita.correo : cita.medico}
            </td>
            <td className="border p-2">
              {idPage === "solicitud-trabajo" ? cita.telefono : cita.fechaturno}
            </td>
            <td className="border p-2 ">
              {idPage === "solicitud-trabajo" ? cita.cv : cita.horaturno}
            </td>
            <td
              className={`border p-2 ${
                cita.estado === "espera"
                  ? "text-warning"
                  : cita.estado === "aprobado"
                  ? "text-success"
                  : "text-danger"
              }`}
            >
              {cita.estado}
            </td>
            {cita.estado === "espera" && (
              <td className="border p-2 ">
                <Button
                  className="btn btn-success"
                  onClick={() =>
                    aprobar(
                      idPage === "solicitud-trabajo" ? cita.id : cita.idTurno
                    )
                  }
                >
                  Aprobar
                </Button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
