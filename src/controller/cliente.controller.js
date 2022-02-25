import { ClienteService } from "../services/cliente.service.js";

export async function crearCliente(req, res) {
  // tarea CREAR EL DTO
  const nuevoCliente = await ClienteService.crear(req.body);

  return res.status(nuevoCliente.message ? 400 : 201).json(nuevoCliente);
}
