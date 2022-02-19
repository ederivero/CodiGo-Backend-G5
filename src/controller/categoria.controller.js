import { CategoriaService } from "../services/categoria.service.js";

export async function crearCategoria(req, res) {
  // crear el dto
  // TODO (tarea)
  const resultado = await CategoriaService.crear(req.body);
  // metodo simple
  // if(resultado.message){
  //     return res.status(400).json(resultado)
  // }else{
  //     return res.status(201).json(resultado)
  // }
  return res.status(resultado.message ? 400 : 201).json(resultado);
}
