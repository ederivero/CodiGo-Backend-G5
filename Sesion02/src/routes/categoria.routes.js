import { Router } from "express";
import {
  actualizarCategoria,
  buscarCategoria,
  crearCategoria,
  listarCategoria,
} from "../controllers/categoria.controller.js";

export const categoriaRouter = Router();

categoriaRouter.route("/categoria").post(crearCategoria).get(listarCategoria);

categoriaRouter.get("/buscarCategoria", buscarCategoria);

categoriaRouter.route("/categoria/:id").put(actualizarCategoria);
