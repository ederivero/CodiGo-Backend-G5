import { Router } from "express";
import { crearCategoria } from "../controllers/categoria.controller.js";

export const categoriaRouter = Router();

categoriaRouter.route("/categoria").post(crearCategoria);
