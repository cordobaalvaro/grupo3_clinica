import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SpecialistComponent = ({ imagePerfil, nombre, description, idEspecialist }) => {
  return (
    <>
      <div>esta es la pagina de SpecialistComponent</div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagePerfil} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {description} {nombre}
          </Card.Text>
          <Link to={`/detalle-especialista/${idEspecialist.replace(/ /g, "_")}`} className='btn btn-primary'>Ver más</Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default SpecialistComponent