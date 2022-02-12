import validator from "validator";

export function usuarioDto({ nombre, apellido, correo, password }) {
  if (!validator.isEmail(correo)) {
    throw new Error("Correo invalido");
  }

  if (validator.isEmpty(password)) {
    throw new Error("El password no debe estar vacio");
  }

  if (validator.isEmpty(nombre) || validator.isEmpty(apellido)) {
    throw new Error("El nombre o el apellido no pueden estar vacios");
  }

  return {
    nombre,
    apellido,
    correo,
    password,
  };
}
