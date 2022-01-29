import express, { json } from "express";
import morgan from "morgan";
import { authRouter } from "./routes/auth.routes.js";
import { tipoProductoRouter } from "./routes/tipoProducto.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(json());

// defino mis rutas
app.use(authRouter);
app.use(tipoProductoRouter);
// fin de la definicion

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo exitosamente en el puerto ${PORT}`);
});
