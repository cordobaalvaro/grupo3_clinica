import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Map from "../mapComponent/Map";
import ContactForm from "../contactform/ContactForm";

const ContactPage = () => {
  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col md='6'>
            <Map />
          </Col>

          <Col md='6'>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactPage;
