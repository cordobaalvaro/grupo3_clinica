import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterC = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-around">
        <Col
          sm="12"
          md="4"
          lg="4"
          className="d-flex justify-content-center mt-3"
        >
          <NavLink className="nav-link" to="/">
            <img src="/LogoFavicon.ico" width="100" height="100" alt="Logo " />
          </NavLink>
        </Col>
        <Col
          sm="12"
          md="4"
          lg="4"
          className="d-flex align-items-center justify-content-center mt-3"
        >
          <a href="https://www.facebook.com/" target="_balnk">
            <FaFacebook size={40} color="#49f1d8" />
          </a>
          <a href="https://x.com/" target="_balnk">
            <FaTwitter size={40} color="#00FF80" />
          </a>
          <a href="https://x.com/" target="_balnk">
            <FaInstagram size={40} color="#49f1d8" />
          </a>
        </Col>
        <Col
          sm="12"
          md="4"
          lg="4"
          className="d-flex flex-column align-items-center mt-3"
        >
          <Link className="nav-link"> Terminos y condiciones</Link>
          <Link className="nav-link"> Politicas de privacidad</Link>
          <Link className="nav-link"> Ayuda </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterC;
