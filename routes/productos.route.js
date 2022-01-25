import { Router } from "express";
import { create, find } from "../controllers/productos.controller.js";

export const productosRouter = Router();

productosRouter.route("/producto").post(create);
productosRouter.route("/productos").get(find);
