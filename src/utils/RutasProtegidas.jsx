import React from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const RutasProtegidas = ({ children }) => {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuarioLogueado"));

  if (!usuarioLogueado) {
    Swal.fire({
      title: "Acceso restringido",
      text: "Debes iniciar sesión para acceder a esta página.",
      icon: "warning",
      confirmButtonText: "OK"
    });

    return <Navigate to="/inicio-de-sesion" />;
  }

  return children;
};

export default RutasProtegidas;
