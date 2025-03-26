import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  contraseniaCoinciden,
  contraseniaNoCoinciden,
  validateRegisterForm,
} from "../utils/validations";
import Swal from "sweetalert2";

export const useRegisterForm = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Nuevo estado para controlar si el usuario está logueado

  const [registerUser, setRegisterUser] = useState({
    nameUser: "",
    emailUser: "",
    phoneUser: "",
    passwordUser: "",
    confirmPasswordUser: "",
  });

  const [errores, setErrores] = useState({});

  const handleChangeRegisterForm = (e) => {
    setRegisterUser({ ...registerUser, [e.target.name]: e.target.value });
  };

  const handleChangeLoginForm = (e) => {
    e.preventDefault();

    const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioExistente = usuariosLs.find(
      (usuario) => usuario.nameUser === registerUser.nameUser
    );
    const passwordExistente = usuariosLs.find(
      (password) => password.passwordUser === registerUser.passwordUser
    );
    console.log(usuarioExistente);

    const nuevosErrores = {};
    if (!registerUser.nameUser.trim()) {
      nuevosErrores.nameUser = "El campo nombre y apellido está vacío.";
    }
    if (!registerUser.passwordUser.trim()) {
      nuevosErrores.passwordUser = "El campo contraseña está vacía.";
    }
    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      if (usuarioExistente && passwordExistente) {
        usuarioExistente.login = true;
        setIsLoggedIn(true); // Actualizar el estado de autenticación

        localStorage.setItem("usuarios", JSON.stringify(usuariosLs));

        sessionStorage.setItem(
          "usuarioLogueado",
          JSON.stringify(usuarioExistente)
        );

        if (usuarioExistente.rol === "usuario") {
          setTimeout(() => {
            navigate("/pagina-de-usuario");
          }, 1000);
        } else {
          navigate("/pagina-de-administrador");
        }
        sessionStorage.setItem(
          "usuarioLogueado",
          JSON.stringify(usuarioExistente)
        );
      } else {
        alert("usuario y/o contraseña no existe");
      }
    }
  };

  const handleClickForm = (e) => {
    e.preventDefault();
    const nuevosErrores = validateRegisterForm(registerUser);
    const coinciden = contraseniaCoinciden(registerUser);
    const noCoinciden = contraseniaNoCoinciden(registerUser);

    if (Object.keys(nuevosErrores).length === 0) {
      if (coinciden) {
        const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];
        const nuevoUsuario = {
          id: usuariosLs[usuariosLs.length - 1]?.id + 1 || 1,
          ...registerUser,
          rol: "admin",
          login: false,
          status: "enable",
        };

        usuariosLs.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuariosLs));

        setRegisterUser({
          nameUser: "",
          emailUser: "",
          phoneUser: "",
          passwordUser: "",
          confirmPasswordUser: "",
        });
        setTimeout(() => {
          Swal.fire({
            title: "Registro con exito",
            icon: "success",
            draggable: true,
          });
          navigate("/inicio-de-sesion");
        }, 1000);
      } else {
        setErrores(noCoinciden);
      }
    } else {
      setErrores(nuevosErrores, noCoinciden);
    }
  };

  const handleLogoutUser = () => {
    const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioLogueado = JSON.parse(
      sessionStorage.getItem("usuarioLogueado")
    );
    const usuarioDeslogueado = usuariosLs.find(
      (usuario) => usuario.login === true
    );
    if (!usuarioLogueado) {
      alert("No hay usuario logueado.");
      return;
    }

    // Buscar al usuario en la lista y actualizar su estado de login
    usuarioDeslogueado.login === false;

    // Guardar cambios en localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuariosLs));

    // Eliminar el usuario activo de sessionStorage
    sessionStorage.removeItem("usuarioLogueado");
    // localStorage.removeItem('usuarios'); SE AGREGA EN EL CASO DE LIMPIAR EL TURNO EN EL LS

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const labels = {
    nameUser: "Nombre y Apellido",
    emailUser: "Correo Electrónico",
    phoneUser: "Teléfono",
    passwordUser: "Contraseña",
    confirmPasswordUser: "Confirmar Contraseña",
  };

  return {
    registerUser,
    errores,
    isLoggedIn, // Devolver el estado de autenticación
    setIsLoggedIn, // Devolver la función para actualizar el estado de autenticación
    handleChangeRegisterForm,
    handleChangeLoginForm,
    handleClickForm,
    handleLogoutUser,
    labels,
  };
};
