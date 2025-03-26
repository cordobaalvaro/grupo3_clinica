import React from "react";
import { NavLink, useNavigate } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";

const NavVisitante = () => {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuarioLogueado"));
  const navigate = useNavigate();
  const alertNoLogin = () => {
    Swal.fire({
      icon: "warning",
      title: "No está logueado",
      text: "Debe iniciar sesión para sacar un turno.",
      confirmButtonText: "Aceptar",
    });
    navigate("/inicio-de-sesion");
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <NavLink className={"nav-link"} to="/">
            LOGO
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className={"nav-link"} to="/">
                Inicio
              </NavLink>
              <NavLink className={"nav-link"} to="/">
                Sobre nosotros
              </NavLink>
              <NavLink className={"nav-link"} to="/">
                Contacto
              </NavLink>
              {usuarioLogueado ? (
                <NavLink className="nav-link" to="/realizar-turno">
                  Sacar Turno
                </NavLink>
              ) : (
                <Button variant="outline-success" onClick={alertNoLogin}>
                  Sacar Turno
                </Button>
              )}
            </Nav>
            <Nav className="ms-auto">
              <NavLink className={"nav-link"} to="/inicio-de-sesion">
                Iniciar sesión
              </NavLink>
              <NavLink className={"nav-link"} to="/pagina-registro">
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
