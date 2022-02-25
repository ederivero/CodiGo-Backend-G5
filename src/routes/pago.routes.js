import { Router } from "express";
import { crearPreferencia } from "../controller/pago.controller.js";

export const pagoRouter = Router();

pagoRouter.post("/preferencia", crearPreferencia);
