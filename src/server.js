import express, { json } from "express";
import mongoose from "mongoose";
import { productoRouter } from "./routes/producto.routes.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(json());

app.use(productoRouter);

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
