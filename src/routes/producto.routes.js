import { Router } from "express";
import { crearProducto } from "../controller/producto.controller.js";

export const productoRouter = Router();

productoRouter.route("/producto").post(crearProducto);
