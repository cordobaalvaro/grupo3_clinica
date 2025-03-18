import React from 'react'

import especialidades from '../database/apiServicios.json'

const SpecialistDetailsPage = ({ especialidad, descripcion, imagen }) => {

  especialidad = especialidades.cardiologia

  return (
    <div>
      {/* Banner */}
      <div
        className="position-relative text-white text-center"
        style={{
          backgroundImage: `url(${especialidad.imagen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"
        ></div>
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 className="fw-bold">{especialidad.nombre}</h1>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Inicio</a></li>
            <li className="breadcrumb-item"><a href="#">Servicios Médicos</a></li>
            <li className="breadcrumb-item"><a href="#">Especialidades</a></li>
            <li className="breadcrumb-item active" aria-current="page">{especialidad.nombre}</li>
          </ol>
        </nav>
      </div>

      {/* Sección de contenido */}
      <div className="container py-4">
        <h2 className="text-primary fw-bold">{especialidad.nombre}</h2>
        {especialidad.descripcion.map((item, index) => (
          <p key={index} className="text-muted">{item.parrafo}</p>
        ))}
      </div>
    </div>
  );
};

export default SpecialistDetailsPage