
export const validateRegisterForm = (registerUser) => {
  const errores = {};

  if (!registerUser.nameUser.trim()) {
    errores.nameUser = "El campo nombre y apellido está vacío.";
  }
  if (!registerUser.emailUser.trim()) {
    errores.emailUser = "El campo correo está vacío.";
  }
  if (!registerUser.phoneUser.trim()) {
    errores.phoneUser = "El campo teléfono está vacío.";
  }
  if (!registerUser.passwordUser.trim()) {
    errores.passwordUser = "El campo contraseña está vacía.";
  }
  if (!registerUser.confirmPasswordUser.trim()) {
    errores.confirmPasswordUser = "El campo confirmación de contraseña está vacío.";
  }

  return errores;
};

export const contraseniaCoinciden = (registerUser) => {
  const coinciden = registerUser.passwordUser === registerUser.confirmPasswordUser
  return coinciden;
}

export const contraseniaNoCoinciden = (registerUser) => {
  return registerUser.passwordUser !== registerUser.confirmPasswordUser
    ? { confirmPasswordUser: "Las contraseñas no coinciden." }
    : {};
}