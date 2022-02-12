import { CategoriaService } from "../services/categorias.service.js";

export async function crearCategoria(req, res) {
  CategoriaService.crear();
  return res.status(201).json();
}
