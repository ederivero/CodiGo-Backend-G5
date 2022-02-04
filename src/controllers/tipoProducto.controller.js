import { TipoProductoService } from "../services/tipoProducto.service.js";

export async function crearTipoProducto(req, res) {
  console.log(req.user);

  const resultado = await TipoProductoService.crearTipoProducto({
    nombreProducto: "",
    usuarioId: 1,
  });

  return res.status(201).json(resultado);
}
