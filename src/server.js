import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, async () => {
  console.log(`Servidor corriendo exitosamente en el puerto ${PORT}`);
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Bd sincronizada exitosamente");
  } catch (error) {
    console.log("Error al conectarse con la bd ❌");
  }
});
