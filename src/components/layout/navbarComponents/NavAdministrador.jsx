import React from "react";
import { NavLink, useNavigate } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRegisterForm } from "../../../hooks/useRegisterForm";

const NavAdministrador = () => {
  const { handleLogoutUser } = useRegisterForm(); // Obtener la función para actualizar el estado de autenticación

  /*  const navigate = useNavigate();

  const handleLogoutUser = () => {
    const usuarioLs = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioFiltrado = usuarioLs.find(
      usuario => usuario.id === usuarioLogueado.id
    );
    usuarioFiltrado.login = false;

    localStorage.setItem("usuarios", JSON.stringify(usuarioLs));

    sessionStorage.removeItem("usuarioLogueado");

    setTimeout(() => {
      navigate("/");
    }, 500);
  }; */
  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <NavLink className={"nav-link"} to='/'>
            LOGO
          </NavLink>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <NavLink className={"nav-link"} to='/'>
                Inicio
              </NavLink>
              <NavLink className={"nav-link"} to='/'>
                Usuarios
              </NavLink>
            </Nav>
            <Nav className='ms-auto'>
              <NavLink className={"nav-link"} to='#' onClick={handleLogoutUser}>
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
