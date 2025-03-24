import NavVisitante from "../navbarComponents/NavVisitante";
import NavUsuario from "../navbarComponents/NavUsuario";
import NavAdministrador from "../navbarComponents/NavAdministrador";
import { useRegisterForm } from "../../../hooks/useRegisterForm";

const NavbarPage = () => {
  const { isLoggedIn } = useRegisterForm(); // Obtener el estado de autenticación
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuarioLogueado"));

  return (
    <>
      {usuarioLogueado && usuarioLogueado.rol === "usuario" ? (
        <NavUsuario />
      ) : usuarioLogueado && usuarioLogueado.rol === "admin" ? (
        <NavAdministrador />
      ) : (
        <NavVisitante />
      )}
    </>
  );
};

export default NavbarPage;
