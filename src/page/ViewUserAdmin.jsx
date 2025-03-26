import React from 'react'
import TableComponent from '../components/table/TableComponent'

const ViewUserAdmin = () => {
  const usuariosLs = JSON.parse(localStorage.getItem('usuarios'))
  console.log(usuariosLs)
  const cantidadUsuarios = Number(usuariosLs.length)
  console.log(cantidadUsuarios)
  
  return (
    <>
      <h1>Usuarios Logueados: {cantidadUsuarios}</h1>
      <h3>Tabla de citas de usuarios</h3> 
      <TableComponent />
    </>
  )
}

export default ViewUserAdmin