import { Router } from "express";
import { crearCategoria } from "../controllers/categorias.controller.js";

export const categoriaRouter = Router();

categoriaRouter.route("/categoria").post(crearCategoria);
