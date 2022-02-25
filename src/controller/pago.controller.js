import { PagoService } from "../services/pago.service.js";

export async function crearPreferencia(req, res) {
  // implementar el dto

  const resultado = await PagoService.generarPreferenciaDePago(req.body);

  return res.status(201).json(resultado);
}
