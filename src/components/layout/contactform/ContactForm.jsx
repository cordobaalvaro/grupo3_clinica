import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./ContactForm.css";
import Swal from "sweetalert2";
import { Col, Container, Row } from "react-bootstrap";

const ContactFormHomePage = ({ idPage }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    especialidad: "",
    mensaje: "",
    cv: "",
  });
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuarioLogueado"));

  // Array con los números de WhatsApp
  const phoneNumbers = ["5491166582695", "5493815376390", "5493816563131"]; // Agrega más números si es necesario

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    {
      if (idPage === "Trabaja-con-nosotros") {
        const solicitud = JSON.parse(localStorage.getItem("solicitudes")) || [];
        const nuevaSolicitud = {
          id: solicitud[solicitud.length - 1]?.id + 1 || 1,
          ...formData,
          estado: "espera",
        };
        solicitud.push(nuevaSolicitud);
        localStorage.setItem("solicitudes", JSON.stringify(solicitud));
        Swal.fire({
          title: "Solicitud Enviada!",
          icon: "success",
          draggable: true,
        });
        setFormData({
          nombre: "",
          telefono: "",
          correo: "",
          especialidad: "",
          cv: "",
        });
      } else {
       const { nombre, telefono, correo, especialidad, mensaje } = formData;
    const link = "http://localhost:5173/pagina-de-administrador";
    const message = usuarioLogueado
      ? `*_Hola soy_* ${usuarioLogueado.nameUser}, 
📞 Teléfono: ${usuarioLogueado.phoneUser}
✉️ Correo: ${usuarioLogueado.emailUser}
📌 Especialidad: ${especialidad}
    Link: <${link}>
📝 Mensaje: ${mensaje}`
      : `*_Hola soy_* ${nombre}, 
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
      }
    }
  };

  return (
    <Container className="my-5 d-flex justify-content-center align-items-center">
      <Row
        className={
          idPage === "Trabaja-con-nosotros"
            ? "w-50 d-flex justify-content-center"
            : "w-100 d-flex justify-content-center"
        }
      >
        <Col>
          <div className="card p-4 shadow-lg">
            <h1 className="fw-bold text-center">
              {idPage === "Trabaja-con-nosotros"
                ? "Carga tus datos y envíanos tu CV"
                : "Contáctanos y empieza a cuidar tu salud"}
            </h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className='mb-3' controlId='formNombre'>
                <Form.Label className='text-muted'>NOMBRE</Form.Label>
                <Form.Control
                  type='text'
                  name='nombre'
                  value={
                    usuarioLogueado ? usuarioLogueado.nameUser : formData.nombre
                  }
                  onChange={handleChange}
                  placeholder='Escribe tu nombre.'
                  required
                  disabled={!!usuarioLogueado}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formTelefono'>
                <Form.Label className='text-muted'>TELÉFONO</Form.Label>
                <Form.Control
                  type='text'
                  name='telefono'
                  value={
                    usuarioLogueado
                      ? usuarioLogueado.phoneUser
                      : formData.telefono
                  }
                  onChange={handleChange}
                  placeholder='Escribe tu teléfono.'
                  required
                  disabled={!!usuarioLogueado}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formCorreo'>
                <Form.Label className='text-muted'>
                  CORREO ELECTRÓNICO
                </Form.Label>
                <Form.Control
                  type='email'
                  name='correo'
                  value={
                    usuarioLogueado
                      ? usuarioLogueado.emailUser
                      : formData.correo
                  }
                  onChange={handleChange}
                  placeholder='Escribe tu correo electrónico.'
                  required
                  disabled={!!usuarioLogueado}
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
                <Form.Label className="text-muted">
                  {idPage === "Trabaja-con-nosotros"
                    ? "Curriculum Vitae"
                    : "MENSAJE"}
                </Form.Label>
                {idPage === "Trabaja-con-nosotros" ? (
                  <Form.Control
                    type="file"
                    name="cv"
                    value={formData.cv}
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="form-control-sm"
                    required
                  />
                ) : (
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje."
                    required
                  />
                )}
              </Form.Group>

              <Button
                className="fw-bold mt-3 w-100 boton-enviar"
                variant="primary"
                type="submit"
              >
                {idPage === "Trabaja-con-nosotros"
                  ? "ENVIAR SOLICITUD"
                  : "ENVIAR POR WHATSAPP"}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactFormHomePage;
