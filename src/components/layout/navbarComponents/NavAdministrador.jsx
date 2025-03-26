import React from "react";
import { NavLink, useNavigate } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRegisterForm } from "../../../hooks/useRegisterForm";

const NavAdministrador = () => {
  const { handleLogoutUser } = useRegisterForm(); // Obtener la función para actualizar el estado de autenticación

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <NavLink className="nav-link" to="/">
            <img src="/LogoFavicon.ico" width="75" height="75" alt="Logo " />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className={"nav-link"} to="/">
                Inicio
              </NavLink>
              <NavLink className={"nav-link"} to="/view-user-admin">
                Usuarios
              </NavLink>
              <NavLink className={"nav-link"} to="/view-specialist-admin">
                Especialistas
              </NavLink>
            </Nav>
            <Nav className="ms-auto">
              <NavLink className={"nav-link"} to="#" onClick={handleLogoutUser}>
                Cerrar sesión
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavAdministrador;
