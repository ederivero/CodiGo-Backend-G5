import validator from "validator";

export function tipoProductoDto({ nombre }) {
  if (validator.isEmpty(nombre)) {
    throw Error("El nombre no puede ser vacio");
  }

  return { nombre };
}
