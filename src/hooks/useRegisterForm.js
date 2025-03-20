import { useState } from "react";
import { contraseniaCoinciden, contraseniaNoCoinciden, validateRegisterForm } from "../utils/validations";
import { useNavigate } from "react-router-dom";


export const useRegisterForm = () => {
  const navigate = useNavigate();

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
    e.preventDefault()

    const usuariosLs = JSON.parse(localStorage.getItem('usuarios')) || []
    const usuarioExistente = usuariosLs.find((usuario) => usuario.nameUser === registerUser.nameUser)
    console.log(usuarioExistente);

    const nuevosErrores = {};
    if (!registerUser.nameUser.trim()) {
      nuevosErrores.nameUser = "El campo nombre y apellido está vacío.";
    }
    if (!registerUser.passwordUser.trim()) {
      nuevosErrores.passwordUser = "El campo contraseña está vacía.";
    }    
    setErrores(nuevosErrores)
    
    if (Object.keys(nuevosErrores).length === 0) {
      if (usuarioExistente) {
          if (usuarioExistente.rol === 'usuario') {
            setTimeout(() => {
              navigate('/pagina-de-usuario')
            }, 1000);
          } else {
            navigate('/pagina-de-administrador')
          }
      } else {
        alert('usuario no existe')
      }
    }
  }
  
  const handleClickForm = (e) => {
    e.preventDefault();
    const nuevosErrores = validateRegisterForm(registerUser);
    const coinciden = contraseniaCoinciden(registerUser);
    const noCoinciden = contraseniaNoCoinciden(registerUser);

    if (Object.keys(nuevosErrores).length === 0) {
      if(coinciden){
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
        setTimeout(() => {
          alert('Registro exito - inicia sesión')
          navigate('/inicio-de-sesion');
        }, 1000);
      } else {
        setErrores(noCoinciden);
      }
    } else {
      setErrores(...nuevosErrores, ...noCoinciden)
    }
  };

  const labels = {
    nameUser: "Nombre y Apellido",
    emailUser: "Correo Electrónico",
    phoneUser: "Teléfono",
    passwordUser: "Contraseña",
    confirmPasswordUser: "Confirmar Contraseña"
  };

  return { registerUser, errores, handleChangeRegisterForm, handleChangeLoginForm, handleClickForm, labels };
};
