import React from "react";
import { NavLink } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavAdministrador = () => {
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
              <NavLink className={"nav-link"} to='/'>
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
