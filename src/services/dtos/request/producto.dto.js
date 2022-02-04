import validator from "validator";

export function productoDto({ nombre, precio, tipoProducto }) {
  if (validator.isEmpty(nombre)) {
    throw Error("El nombre del producto no puede estar vacio");
  }

  if (!validator.isFloat(precio)) {
    throw Error("El precio solo puede contener numeros");
  }

  if (!validator.isNumeric(tipoProducto)) {
    throw Error("El tipoProducto debe ser un numero");
  }

  return { nombre, precio, tipoProductoId: tipoProducto };
}
