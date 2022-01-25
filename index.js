import express, { json } from "express";
import { productosRouter } from "./routes/productos.route.js";

const app = express();
const PORT = 3000;

app.use(json());

app.use(productosRouter);
app.listen(PORT, () => {
  console.log("Servidor corriendo exitosamente 🚀");
});
