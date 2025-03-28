import React from "react";
import { NavLink } from "react-router";
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
          <NavLink className='nav-link' to='/pagina-de-usuario'>
            <img
              src='/Logo_Clinica_sin_fondo.png'
              width='95'
              height='95'
              alt='Logo '
            />
          </NavLink>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <NavLink className={"nav-link"} to='/pagina-de-usuario'>
                Inicio
              </NavLink>
              <NavLink className={"nav-link"} to='#'>
                Contacto
              </NavLink>
              <NavLink
                variant='outline-success'
                className={"nav-link"}
                to='/pagina-de-turnos'
              >
                Sacar Turno
              </NavLink>
              <NavLink className={"nav-link"} to='/#sobre-nosotros'>
                Sobre nosotros
              </NavLink>
            </Nav>
            <Nav className='ms-auto'>
              <NavLink className={"nav-link"} to='/trabaja-con-nosotros'>
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
