import { Router } from "express";
import {
  crearTarea,
  listarTareasUsuario,
} from "../controllers/tarea.controller.js";
import { validarUsuario } from "../utils/validador.js";

export const tareaRouter = Router();

tareaRouter
  .route("/tarea")
  .all(validarUsuario)
  .get(listarTareasUsuario)
  .post(crearTarea);
