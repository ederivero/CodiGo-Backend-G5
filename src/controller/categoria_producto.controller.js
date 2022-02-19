import { CategoriaProductoService } from "../services/categoria_producto.service.js";

export async function crear(req, res) {
  // validar el dto

  const resultado = await CategoriaProductoService.crear(req.body);

  return res.status(resultado.message ? 400 : 201).json(resultado);
}
