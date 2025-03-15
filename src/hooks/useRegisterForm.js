import { useState } from "react";
import { validateRegisterForm } from "../utils/validations";

export const useRegisterForm = () => {
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

  const handleClickForm = (e) => {
    e.preventDefault();
    const nuevosErrores = validateRegisterForm(registerUser);

    if (Object.keys(nuevosErrores).length === 0) {
      const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];

      const nuevoUsuario = {
        id: usuariosLs[usuariosLs.length - 1]?.id + 1 || 1,
        ...registerUser,
        rol: "usuario",
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
    } else {
      setErrores(nuevosErrores);
    }
  };

  const labels = {
    nameUser: "Nombre y Apellido",
    emailUser: "Correo Electrónico",
    phoneUser: "Teléfono",
    passwordUser: "Contraseña",
    confirmPasswordUser: "Confirmar Contraseña"
  };

  return { registerUser, errores, handleChangeRegisterForm, handleClickForm, labels };
};
