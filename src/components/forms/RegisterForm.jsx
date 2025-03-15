import { Button, Form } from "react-bootstrap";
import { useRegisterForm } from "../../hooks/useRegisterForm";

const RegisterForm = () => {
  const { registerUser, errores, handleChangeRegisterForm, handleClickForm, labels } = useRegisterForm();
  return (
    <Form>
      {["nameUser", "emailUser", "phoneUser", "passwordUser", "confirmPasswordUser"].map((campoInput, index) => (
        <Form.Group className="mb-3" controlId={campoInput} key={index}>
          <Form.Label>
            {campoInput === "nameUser" ? "Nombre y Apellido" : campoInput === "emailUser" ? "Correo Electrónico" : campoInput === "phoneUser" ? "Teléfono" : campoInput === "passwordUser" ? "Contraseña" : "Confirmar Contraseña"}
          </Form.Label>
          <Form.Control
            type={campoInput.includes("password") || campoInput.includes("confirmPassword") ? "password" : "text"}
            placeholder={Ingresa tu ${labels[campoInput]}}
            name={campoInput}
            value={registerUser[campoInput]}
            onChange={handleChangeRegisterForm}
          />
          {errores[campoInput] && <p className="text-danger">{errores[campoInput]}</p>}
        </Form.Group>
      ))}
      <Button variant="primary" type="submit" onClick={handleClickForm} className="w-100">
        Registrarse
      </Button>
    </Form>
  );
};

export default RegisterForm;