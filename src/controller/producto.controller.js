import { productoDto } from "../dtos/request/producto.dto.js";
import { ProductoService } from "../services/producto.service.js";

export async function crearProducto(req, res) {
  try {
    const data = productoDto(req.body);

    const resultado = await ProductoService.crear(data);

    return res.status(201).json(resultado);
  } catch (error) {
    return res.status(400).json({
      error: error.message,
      message: "Error al crear el producto",
    });
  }
}
