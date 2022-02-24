import validator from "validator";

export function categoriaDto({ nombre, color }) {
  if (validator.isEmpty(nombre)) {
    throw Error("el nombre no puede estar vacio");
  }
  if (!validator.isEmpty(color)) {
    throw Error("El color no puede esta vacio");
  }

  return { nombre, color };
}
