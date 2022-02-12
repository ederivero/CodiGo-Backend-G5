import express, { json } from "express";
import mongoose from "mongoose";
import { categoriaRouter } from "./routes/categorias.routes.js";

const app = express();
// sirve para indicar a mi aplicacion de Express que puedo recibir la informacion en el body mediante un formato JSON
// si no definimos nada, el body siempre llegara undefined porque no entendera que es lo que nos esta mandando el frontend
// se suele llamar como Body Parser
app.use(json()); // > Content-Type : application/json
const PORT = process.env.PORT ?? 3000;

// definimos las rutas
app.use(categoriaRouter);
// fin de la definicion

app.listen(PORT, async () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Se conecto a la base de datos 🔌");
  } catch (error) {
    console.log(error);
  }
});
