import { Router } from "express";
import { crearCategoria } from "../controller/categoria.controller.js";

export const categoriaRouter = Router();

categoriaRouter
  .route("/categoria")
  .post(crearCategoria)
  .get
  // hacer el get de todas las categorias ordenadas alfabeticamente por el nombre de manera asc
  // NO USAR MAP o FILTER, usar los ordenamientos de mongoose
  ()
  .put
  // hacer el put para actualizar la categoria
  ();

categoriaRouter
  .route("/categoria/:id")
  .get // traer la categoria con todos sus productos
  ();

//   {
//     nombre:'cat1',
//     image:'#000000',
//     productos:[
//         {
//             id: '123',
//             nombre:'prod1',
//             precio:10.5
//         },{},{},{}
//     ]
//   }

// PLAZO DE ENTREGA MIERCOLES 23 a las 23:59
