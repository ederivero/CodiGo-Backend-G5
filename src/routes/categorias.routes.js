import { Router } from "express";
import {
  crearCategoria,
  devolverCategorias,
  eliminarCategoria,
} from "../controllers/categorias.controller.js";

export const categoriaRouter = Router();

categoriaRouter.route("/categoria").post(crearCategoria);

categoriaRouter.get("/categorias", devolverCategorias);

categoriaRouter.route("/categoria/:id").delete(eliminarCategoria);
