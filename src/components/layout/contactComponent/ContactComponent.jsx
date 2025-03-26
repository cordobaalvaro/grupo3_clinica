import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Map from "../mapComponent/Map";
import ContactForm from "../contactform/ContactForm";

const ContactComponent = () => {
  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col md='6' lg='5' xl='6' className='mt-5 d-none d-lg-block'>
            <Map />
          </Col>

          <Col md={12} lg={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactComponent;
