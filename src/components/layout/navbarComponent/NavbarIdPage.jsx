import React, { useState, useEffect } from "react";
import NavVisitante from "../navbarComponents/NavVisitante";
import NavUsuario from "../navbarComponents/NavUsuario";
import NavAdministrador from "../navbarComponents/NavAdministrador";

const NavbarPage = () => {
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);

  useEffect(() => {
    // Cargar el usuario logueado al montar el componente
    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
    setUsuarioLogueado(usuario);
  }, []);

  return (
    <>
      {usuarioLogueado?.rol === "usuario" ? (
        <NavUsuario />
      ) : usuarioLogueado?.rol === "admin" ? (
        <NavAdministrador />
      ) : (
        <NavVisitante />
      )}
    </>
  );
};

export default NavbarPage;
