import { TipoProductoService } from "../services/tipoProducto.service.js";

export async function crearTipoProducto(req, res) {
  const resultado = await TipoProductoService.crearTipoProducto({
    nombreProducto: "",
    usuarioId: "",
  });

  return res.json(resultado);
}
