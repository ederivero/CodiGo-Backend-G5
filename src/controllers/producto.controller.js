import { ProductoService } from "../services/producto.service.js";

export async function crear(req, res) {
  // crear el archivo producto.dto.js en los dtos/request y agregar las validaciones que vean pertinentes
  const data = productoDto(req.body);

  const resultado = await ProductoService.crearProducto(data);

  return res.status(201).json(resultado);
}
