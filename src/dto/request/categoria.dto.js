import validator from "validator";

export function categoriaDto({ nombre, estado, imagen }) {
  if (validator.isEmpty(nombre)) {
    throw new Error("El nombre no puede estar vacio");
  }

  if (estado && !validator.isBoolean(estado)) {
    throw new Error("El estado debe ser true o false");
  }

  return { nombre, estado, imagen };
}
