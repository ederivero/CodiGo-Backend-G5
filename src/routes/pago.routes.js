import { Router } from "express";
import {
  crearPreferencia,
  recibirNotificacion,
} from "../controller/pago.controller.js";

export const pagoRouter = Router();

pagoRouter.post("/preferencia", crearPreferencia);

pagoRouter.post("/notificaciones", recibirNotificacion);
