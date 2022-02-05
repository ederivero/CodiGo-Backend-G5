import { Router } from "express";
import {
  crear,
  devolver,
  devolverProductos,
} from "../controllers/producto.controller.js";
import { validarUsuario } from "../utils/validador.js";

export const productoRouter = Router();

productoRouter.route("/producto").post(validarUsuario, crear);
productoRouter.route("/producto/:id").get(devolver);
productoRouter.route("/productos").get(devolverProductos);
