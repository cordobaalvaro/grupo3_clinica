import React, { useState } from "react";
import NavVisitante from "../navbarComponents/NavVisitante";
import NavUsuario from "../navbarComponents/NavUsuario";
import NavAdministrador from "../navbarComponents/NavAdministrador";

const NavbarPage = ({ idPage }) => {
  return (
    <>
      {idPage === "visitante" && <NavVisitante />}
      {idPage === "usuario" && <NavUsuario />}
      {idPage === "administrador" && <NavAdministrador />}
    </>
  );
};

export default NavbarPage;
