import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ children }) => {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuarioLogueado"));
  return usuarioLogueado ? children : <Navigate to="/inicio-de-sesion" />;
}

export default RutasProtegidas

