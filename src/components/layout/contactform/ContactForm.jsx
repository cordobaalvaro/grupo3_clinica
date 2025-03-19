import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const ContactFormHomePage = () => {
  return (
    <>
      <h1 className='fw-bold'>Contactanos y empezá a cuidar tu salud</h1>
      <Form className='mt-3'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label className='text-muted'>NOMBRE</Form.Label>
          <Form.Control type='textl' placeholder='Escribe tu nombre.' />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label className='text-muted'>TELEFONO</Form.Label>
          <Form.Control type='textl' placeholder='Escribe tu Telefono.' />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label className='text-muted'>CORREO ELECTRONICO</Form.Label>
          <Form.Control
            type='email'
            placeholder='Escribe tu Correo Electronico.'
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label className='text-muted'>ESPECIALIDAD</Form.Label>
          <Form.Select disabled>
            <option></option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId='message'>
          <Form.Label className='text-muted'>MENSAJE</Form.Label>
          <Form.Control as='textarea' rows={4} />
        </Form.Group>

        <Button
          className='fw-bold btn-success mt-3 w-100'
          variant='primary'
          type='submit'
        >
          ENVIAR
        </Button>
      </Form>
    </>
  );
};

export default ContactFormHomePage;
