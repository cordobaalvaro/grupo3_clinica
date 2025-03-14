import { useState } from 'react';
import { Card, Button, Form, Col, Row, InputGroup } from 'react-bootstrap';

const FormLogin = () => {
  return (
    <Row className='d-flex justify-content-center'>
      <Col sm={10} md={4} xl={4} className='p-3'>
        <Card className="p-3 mt-3">
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

export default FormLogin