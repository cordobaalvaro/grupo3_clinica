import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./ContactForm.css";

const ContactFormHomePage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    especialidad: "",
    mensaje: "",
  });

  // Array con los números de WhatsApp
  const phoneNumbers = ["5491166582695", "5493815376390", "5493816563131"]; // Agrega más números si es necesario

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, telefono, correo, especialidad, mensaje } = formData;
    const link = "http://localhost:5173/pagina-de-administrador"
    const message = `*_Hola soy_* ${nombre}, 
📞 Teléfono: ${telefono}
✉️ Correo: ${correo}
📌 Especialidad: ${especialidad}
    Link: <${link}>
📝 Mensaje: ${mensaje}`;
//🔗 aqui va el link de la tabla de especialistas 

    // Enviar el mensaje a cada número del array
    phoneNumbers.forEach((phone, index) => {
      setTimeout(() => {
        const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
          message
        )}`;
        window.open(url, "_blank");
      }, index * 10000); // 1.5 segundos de diferencia entre cada número
    });
  };

  return (
    <>
      <h1 className="fw-bold">Contáctanos y empieza a cuidar tu salud</h1>
      <Form className="mt-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label className="text-muted">NOMBRE</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Escribe tu nombre."
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTelefono">
          <Form.Label className="text-muted">TELÉFONO</Form.Label>
          <Form.Control
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Escribe tu teléfono."
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCorreo">
          <Form.Label className="text-muted">CORREO ELECTRÓNICO</Form.Label>
          <Form.Control
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Escribe tu correo electrónico."
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="text-muted">ESPECIALIDAD</Form.Label>
          <Form.Select
            name="especialidad"
            value={formData.especialidad}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una especialidad</option>
            <option value="Cardiología">Cardiología</option>
            <option value="Dermatología">Dermatología</option>
            <option value="Pediatría">Pediatría</option>
            <option value="Traumatología">Traumatología</option>
            <option value="Psicología">Psicología</option>
            <option value="Odontología">Odontología</option>
            <option value="Nutrición">Nutrición</option>
            <option value="Neurología">Neurología</option>
            <option value="Ginecología">Ginecología</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="formMensaje">
          <Form.Label className="text-muted">MENSAJE</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje."
            required
          />
        </Form.Group>

        <Button
          className="fw-bold mt-3 w-100 boton-enviar"
          variant="primary"
          type="submit"
        >
          ENVIAR POR WHATSAPP
        </Button>
      </Form>
    </>
  );
};

export default ContactFormHomePage;
