import { Router } from "express";
import { crearComprobante } from "../controller/facturacion.controller.js";

export const facturacionRouter = Router();

facturacionRouter.post("/crear-comprobante", crearComprobante);
