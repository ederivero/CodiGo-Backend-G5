import { Router } from "express";
import {
  crear,
  devolver,
  devolverProductos,
  eliminarProducto,
} from "../controllers/producto.controller.js";
import { validarUsuario } from "../utils/validador.js";

export const productoRouter = Router();

productoRouter.route("/producto").post(validarUsuario, crear);
productoRouter
  .route("/producto/:id")
  .get(devolver)
  .delete(validarUsuario, eliminarProducto);
productoRouter.route("/productos").get(devolverProductos);
