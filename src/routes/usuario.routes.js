import { Router } from "express";
import {
  crearUsuario,
  olvidePassword,
} from "../controllers/usuario.controller.js";

export const usuarioRouter = Router();

usuarioRouter.post("/registro", crearUsuario);
usuarioRouter.post("/forgot-password", olvidePassword);
