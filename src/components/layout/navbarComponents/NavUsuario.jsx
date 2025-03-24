import React from "react";
import { NavLink, useNavigate } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRegisterForm } from "../../../hooks/useRegisterForm";

const NavUsuario = () => {
  const { handleLogoutUser } = useRegisterForm();

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
                Especialidades
              </NavLink>
              <NavLink className={"nav-link"} to='/'>
                Contacto
              </NavLink>
            </Nav>
            <Nav className='ms-auto'>
              <NavLink className={"nav-link"} to='/'>
                Trabaja con nosotros
              </NavLink>
              <NavLink className={"nav-link"} to='#' onClick={handleLogoutUser}>
                Cerrar sesion
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavUsuario;
