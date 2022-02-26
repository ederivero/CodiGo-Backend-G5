import { FacturacionService } from "../services/facturacion.service.js";

export async function crearComprobante(req, res) {
  const { tipo, ...data } = req.body;
  const resultado = await FacturacionService.generarComprobante(data, tipo);

  return res.status(201).json(resultado);
}
