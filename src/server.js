import express, { json } from "express";
import mongoose from "mongoose";

const app = express();
app.use(json());
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, async () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Se conecto a la base de datos 🔌");
  } catch (error) {
    console.log(error);
  }
});
