import { CategoriaService } from "../services/categorias.service.js";
import { categoriaDto } from "../dto/request/categoria.dto.js";

export async function crearCategoria(req, res) {
  try {
    const data = categoriaDto(req.body);

    const nuevaCategoria = await CategoriaService.crear(data);

    return res.status(201).json(nuevaCategoria);
  } catch (error) {
    return res.status(400).json({
      message: "Error al crear la categoria",
      content: error,
    });
  }
}

export async function devolverCategorias(req, res) {
  const resultado = await CategoriaService.devolver();

  return res.json(resultado);
}

export async function eliminarCategoria(req, res) {
  const resultado = await CategoriaService.eliminar(req.params.id);

  if (resultado) {
    return res.json(resultado);
  } else {
    return res.status(400).json({
      message: "Error al eliminar la categoria",
    });
  }
}
