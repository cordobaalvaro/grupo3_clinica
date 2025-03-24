import React from 'react'
import { useParams } from 'react-router-dom'

const TurnSpecialist = () => {
  const {id} = useParams()
  return (
    <div>Esta es la pagina del TurnSpecialist</div>
  )
}

export default TurnSpecialist