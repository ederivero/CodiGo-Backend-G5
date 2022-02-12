import { Router } from "express";
import { crearUsuario } from "../controllers/usuario.controller.js";

export const usuarioRouter = Router();

usuarioRouter.post("/registro", crearUsuario);
