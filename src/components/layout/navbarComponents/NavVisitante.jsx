import React from "react";
import { NavLink } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavVisitante = () => {
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
                Sobre nosotros
              </NavLink>
              <NavLink className={"nav-link"} to='/'>
                Especialidades
              </NavLink>
              <NavLink className={"nav-link"} to='/'>
                Contacto
              </NavLink>
              <NavLink className={"nav-link"} to='/realizar-turno'>
                Sacar Turno
              </NavLink>
            </Nav>
            <Nav className='ms-auto'>
              <NavLink className={"nav-link"} to='/inicio-de-sesion'>
                Iniciar sesión
              </NavLink>
              <NavLink className={"nav-link"} to='/pagina-registro'>
                Registarse
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavVisitante;
