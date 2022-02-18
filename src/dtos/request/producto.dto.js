import validator from "validator";

export function productoDto({ nombre, precio, tipo, estado }) {
  // nombre no puede esta vacio
  if (validator.isEmpty(nombre)) {
    throw Error("el nombre no puede estar vacio");
  }
  // precio no puede ser negativo
  if (!validator.isDecimal(precio) && +precio < 0) {
    throw Error("El precio no puede ser negativo");
  }

  // tipo puede ser "ABARROTES", "HIGIENE PERSONAL", "OTROS" (no usar validator)
  if (tipo !== "ABARROTES" || tipo !== "HIGIENE PERSONAL" || tipo !== "OTROS") {
    throw Error('el tipo debe ser "ABARROTES", "HIGIENE PERSONAL", "OTROS"');
  }

  // estado es opcional pero si me lo pasa tiene que ser un boolean
  if (estado && !validator.isBoolean(estado)) {
    throw Error("El estado tiene que true o false");
  }

  return { nombre, precio, tipo, estado };
}
