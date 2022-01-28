import validator from "validator";

export function loginDto({ email, password }) {
  // isStrongPassword => longitud minima 8 caracteres, al menos una mayus, al menus una minus, al menos 1 numero, al menos 1 simbolo
  try {
    validator.isEmail(email) && validator.isStrongPassword(password);
  } catch (error) {
    console.log(error);
    console.log("ocurrio un error!");
  }
}
