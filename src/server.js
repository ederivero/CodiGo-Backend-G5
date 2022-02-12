import express, { json } from "express";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { categoriaRouter } from "./routes/categorias.routes.js";
import { imagenRouter } from "./routes/imagen.routes.js";
import { usuarioRouter } from "./routes/usuario.routes.js";

// buscara la ubicacion de nuestro proyecto en el servidor (maquina) en la cual se este alojando
// siempre que deseen obtener la ubicacion de su proyecto en el servidor tendran que hacerlo de esta manera, NOTA: siempre que esten utilizando un type:module en el package.json
// __dirname > nos brinda la ubicacion en la cual se encuentra nuestro proyecto (solo funciona en commonJs)
const direccion_proyecto = dirname(fileURLToPath(import.meta.url));

const app = express();
// sirve para indicar a mi aplicacion de Express que puedo recibir la informacion en el body mediante un formato JSON
// si no definimos nada, el body siempre llegara undefined porque no entendera que es lo que nos esta mandando el frontend
// se suele llamar como Body Parser
app.use(json()); // > Content-Type : application/json
const PORT = process.env.PORT ?? 3000;

// definimos las rutas
app.use(categoriaRouter);
app.use(imagenRouter);
app.use(usuarioRouter);
// fin de la definicion

// exponer los archivos que quiero que sean accesibles desde fuera del servidor

// servira para cuando nuestra carpeta que queramos exponer este afuera del proyecto
// const carpeta_fuera_del_proyecto = direccion_proyecto.slice(0, direccion_proyecto.search('src'))
// C./users/eduardo/documents/...../codigo-backend-g5/
app.use("/src/media", express.static(direccion_proyecto + "/media"));

app.listen(PORT, async () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Se conecto a la base de datos 🔌");
  } catch (error) {
    console.log(error);
  }
});
