import { PagoService } from "../services/pago.service.js";

export async function crearPreferencia(req, res) {
  const resultado = await PagoService.generarPreferenciaDePago();

  return res.status(201).json(resultado);
}
