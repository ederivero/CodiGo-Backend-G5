import express, { json } from "express";
import morgan from "morgan";
import { authRouter } from "./routes/auth.routes.js";
import { tipoProductoRouter } from "./routes/tipoProducto.routes.js";
import { productoRouter } from "./routes/producto.routes.js";
import { archivoRouter } from "./routes/archivo.routes.js";
import cors from "cors";

const app = express();

app.use(morgan("dev"));
app.use(json());
app.use(cors());
// defino mis rutas
app.use(authRouter);
app.use(tipoProductoRouter);
app.use(productoRouter);
app.use(archivoRouter);
// fin de la definicion

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo exitosamente en el puerto ${PORT}`);
});
