import { productoDto } from "../services/dtos/request/producto.dto.js";
import { ProductoService } from "../services/producto.service.js";

export async function crear(req, res) {
  // crear el archivo producto.dto.js en los dtos/request y agregar las validaciones que vean pertinentes
  try {
    const data = productoDto(req.body);

    const resultado = await ProductoService.crearProducto(data);

    return res.status(201).json(resultado);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
