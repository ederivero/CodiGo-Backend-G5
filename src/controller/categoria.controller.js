import { categoriaDto } from "../dtos/request/categoria.dto.js";
import { CategoriaService } from "../services/categoria.service.js";

export async function crearCategoria(req, res) {
  // crear el dto
  // TODO (tarea)
  const data = categoriaDto(req.body);

  const resultado = await CategoriaService.crear(data);
  // metodo simple
  // if(resultado.message){
  //     return res.status(400).json(resultado)
  // }else{
  //     return res.status(201).json(resultado)
  // }
  return res.status(resultado.message ? 400 : 201).json(resultado);
}

export async function getCategorias(req, res) {
  const resultado = await CategoriaService.listar();
  return res.status(200).json(resultado);
}

export async function putCategoria(req, res) {
  const { id } = req.params;
  const resultado = await CategoriaService.actualizar(req.body, id);
  return res.status(201).json(resultado);
}

export async function getCategoria(req, res) {
  const { id } = req.params;
  const resultado = await CategoriaService.get(id);

  return res.status(200).json(resultado);
}
