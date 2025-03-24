import React from 'react'

const UserPage = () => {
  const usuarioLs = JSON.parse(localStorage.getItem('usuarios')) || []
  const nombreUsuario = usuarioLs.length > 0 ? usuarioLs[0].nameUser : "sin nombre"
  console.log(nombreUsuario)

  document.title = nombreUsuario;

  return (
    <div>estas en la pagina UserPage</div>
  )
}

export default UserPage