import React from 'react'
import SpecialistDetailsPage from './SpecialistDetailsPage'

import especialistas from '../database/apiServicios.json'

const SpecialistPage = () => {
  const especialidad = especialistas.traumatologia; // Use the correct key based on your data
  return (
    <SpecialistDetailsPage />
  )
}

export default SpecialistPage