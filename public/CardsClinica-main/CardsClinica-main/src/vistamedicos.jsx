import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';



function Vistamedicos() {

    const [turnos, setTurnos] = useState([])

    useEffect(() => {
        setTurnos(JSON.parse(localStorage.getItem('datosturno')) || []);
    }, [])

    const navega = useNavigate()



    return (
        <>

            <Container>
                <Row className="mt-3">

                    <Col xs={12} sm={6} md={4} lg={12} className="mb-3">
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Paciente</th>
                                    <th>Especialidad</th>
                                    <th>Medico</th>
                                    <th>Fecha turno</th>
                                    <th>hora Turno</th>
                                </tr>
                            </thead>
                            <tbody>{turnos.map((campo, index) => (
                                    <tr>
                                        <td>{campo.paciente}</td>
                                    <td>{campo.especialidad}</td>
                                    <td>{campo.medico}</td>
                                    <td>{campo.fechaturno}</td>
                                    <td>{campo.horaturno}</td>

                                  </tr>
                                    
                                    
                                ))}</tbody>
                        </Table>

                    </Col>

                </Row>
            </Container>

        </>
    )
}

export default Vistamedicos
