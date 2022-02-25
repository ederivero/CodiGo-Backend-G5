import express, { json } from "express";
import mongoose from "mongoose";
import { categoriaRouter } from "./routes/categoria.routes.js";
import { categoriaProductoRouter } from "./routes/categoria_producto.routes.js";
import { productoRouter } from "./routes/producto.routes.js";
import { pagoRouter } from "./routes/pago.routes.js";
import mercadopago from "mercadopago";

// access_token > es la token que se va a crear por cada negocio y esto servira a MP para saber a que negocio tiene que depositar el monto cobrado
// integrator_id > el id del desarrollador que esta haciendo esta integracion
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN_MP,
  integrator_id: process.env.INTEGRATOR_ID_MP,
});

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(json());

app.use(productoRouter);
app.use(categoriaRouter);
app.use(categoriaProductoRouter);
app.use(pagoRouter);

app.listen(PORT, async () => {
  console.log(`Servidor corriendo exitosamente en el puerto ${PORT}`);
  try {
    await mongoose.connect(
      process.env.NODE_ENV === "production"
        ? process.env.DATABASE_URL
        : process.env.DATABASE_URL_DEV
    );
    console.log("Bd sincronizada exitosamente");
  } catch (error) {
    console.log("Error al conectarse con la bd ❌");
  }
});
