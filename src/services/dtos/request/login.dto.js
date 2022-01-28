import validator from "validator";

export function loginDto({ correo, password }) {
  // isStrongPassword => longitud minima 8 caracteres, al menos una mayus, al menus una minus, al menos 1 numero, al menos 1 simbolo
  // el validador hace la validacion siempre y cuando sea un string, si no es un string emitira un error pero la validacion retornara un boolean
  if (!validator.isEmail(correo)) {
    throw Error("El correo debe ser un correo valido");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error(
      "La contraseña no es lo suficientemente segura, debe tener al menos una Mayus, una minus, un numero, un simbolo y una longitud minima de 8 caracteres"
    );
  }

  return { correo, password };
}
