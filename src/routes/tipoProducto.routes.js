import { Router } from "express";
import {
  crearTipoProducto,
  listarTipoProductos,
} from "../controllers/tipoProducto.controller.js";
import { validarUsuario } from "../utils/validador.js";

export const tipoProductoRouter = Router();

tipoProductoRouter
  .route("/tipo-producto")
  .post(validarUsuario, crearTipoProducto)
  .get(listarTipoProductos);
