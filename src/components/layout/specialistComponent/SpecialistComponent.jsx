import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SpecialistComponent = ({ imagePerfil, nombre, description, idEspecialist }) => {
  return (
    <>
      <Card className='mt-3 mb-2 mx-auto' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagePerfil} style={{ width: "100%", height: "150px", objectFit: "cover", marginBottom: "10px",}} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {description} {nombre}
          </Card.Text>
          <Link to={`/detalle-especialista/${idEspecialist.replace(/ /g, "_")}`} className='btn btn-primary'>Ver más</Link>
          <Link to={`/detalle-especialista/${idEspecialist.replace(/ /g, "_")}`} className='btn btn-success ms-3'>Ver más</Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default SpecialistComponent