import { Card, Button, Form, Col, Row } from "react-bootstrap";
import { useRegisterForm } from "../../hooks/useRegisterForm";

const LoginForm = () => {
  const {
    registerUser,
    errores,
    handleChangeRegisterForm,
    handleChangeLoginForm
  } = useRegisterForm();
  return (
    <Row className="d-flex justify-content-center">
      <Col sm={10} md={4} xl={4} className="p-3">
        <Card className="p-3 mt-3">
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control type="text" placeholder="Nombre de usuario" name="nameUser" value={registerUser.nameUser} onChange={handleChangeRegisterForm} isInvalid={errores.nameUser} />
              {
                <p className="text-danger">{errores.nameUser}</p>
              }
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="passwordUser" value={registerUser.passwordUser} onChange={handleChangeRegisterForm} isInvalid={errores.passwordUser} />
              {
                <p className="text-danger">{errores.passwordUser}</p>
              }
            </Form.Group>
          </Form>
          <Button
            variant="primary"
            type="submit"
            onClick={handleChangeLoginForm}
            className="w-100"
          >
            Iniciar Sesión
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginForm