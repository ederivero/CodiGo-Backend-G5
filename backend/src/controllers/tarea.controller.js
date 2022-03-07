import { TareaService } from "../services/tarea.service.js";

export async function crearTarea(req, res) {
  // TODO: hacer el dto

  const result = await TareaService.crearTarea(req.body, req.user);

  return res.status(result.message ? 400 : 201).json(result);
}

export async function listarTareasUsuario(req, res) {
  const result = await TareaService.listaTareasDelUsuario(req.user);

  return res.json(result);
}

// TODO: implementar el update y delete
