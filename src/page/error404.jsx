import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Error404 = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center">
        <img
          src="ruta-a-tu-imagen.jpg"
          alt="Página no encontrada"
          className="img-fluid mb-4"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="display-4 text-danger">404</h1>
        <p className="lead text-muted">
          Lo sentimos, la página que buscas no está disponible.
        </p>
        <p className="text-muted">
          Si necesitas asistencia, por favor contáctanos o visita nuestra página
          principal.
        </p>
        <a href="/" className="btn btn-primary">
          Volver al inicio
        </a>
      </div>
    </div>
  );
};

export default Error404;
