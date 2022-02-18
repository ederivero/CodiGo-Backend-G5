import validator from "validator";

export function productoDto({ nombre, precio, tipo, estado }) {
  // nombre no puede esta vacio
  // precio no puede ser negativo
  // tipo puede ser "ABARROTES", "HIGIENE PERSONAL", "OTROS" (no usar validator)
  // estado es opcional pero si me lo pasa tiene que ser un boolean
}
