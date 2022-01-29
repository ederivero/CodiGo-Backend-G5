import { TipoProductoService } from "../services/tipoProducto.service.js";
import jwt from "jsonwebtoken";

export async function crearTipoProducto(req, res) {
  console.log(req.headers);
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(403).json({
      message:
        "No tienes los privilegios suficientes para realizar esta accion 🚫",
    });
  }
  // actualmente authorization tiene 'Bearer 123123.12312313.123123'
  // se desea solamente la token
  const token = authorization.split(" ")[1];

  // esto verificara que la token sea valida y que ademas su contraseña sea correcta, si no lo es emitira un error, si la token es valida retornara el payload (parte intermedia de la token)
  try {
    const data = jwt.verify(token, "ArribaPeru");
    console.log(data);

    const resultado = await TipoProductoService.crearTipoProducto({
      nombreProducto: "",
      usuarioId: 1,
    });

    return res.json(resultado);
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      message: "Token invalida",
    });
  }
}
