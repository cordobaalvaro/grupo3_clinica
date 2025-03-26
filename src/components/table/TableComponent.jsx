import React, { useState, useEffect } from 'react';

const TableComponent = () => {
  const [tablaTurno, setTablaTurno] = useState([]);

  useEffect(() => {
    const turnosUsuarios = JSON.parse(localStorage.getItem('datosturno')) || [];
    setTablaTurno(turnosUsuarios);
  }, []); // Se ejecuta solo al montar el componente

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedTurnos = JSON.parse(localStorage.getItem('datosturno')) || [];
      setTablaTurno(updatedTurnos);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (tablaTurno.length === 0) {
    return <p>No hay turnos disponibles</p>;
  }

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Nombre Paciente</th>
          <th className="border p-2">Especialidad</th>
          <th className="border p-2">Médico</th>
          <th className="border p-2">Fecha</th>
          <th className="border p-2">Horario</th>
          <th className="border p-2">Estado</th>
        </tr>
      </thead>
      <tbody>
        {tablaTurno.map((cita) => (
          <tr key={cita.id} className="text-center">
            <td className="border p-2">{cita.paciente}</td>
            <td className="border p-2">{cita.especialidad}</td>
            <td className="border p-2">{cita.medico}</td>
            <td className="border p-2">{cita.fechaturno}</td>
            <td className="border p-2">{cita.horaturno}</td>
            <td className={`border p-2 ${cita.estado === "espera" ? "text-warning"
                : cita.estado === "aprobado" ? "text-success"
                  : "text-danger"
              }`}>
              {cita.estado}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
