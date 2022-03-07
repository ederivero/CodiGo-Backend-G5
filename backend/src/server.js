import express, { json } from "express";
import cors from "cors";
import { userRouter } from "./routes/user.routes.js";
import mongoose from "mongoose";
import { tareaRouter } from "./routes/tarea.routes.js";

const app = express();

app.use(json());
app.use(cors());

const PUERTO = process.env.PORT ?? 3000;

app.get("/api/status", (req, res) => {
  return res.json({
    date: new Date(),
  });
});

// definimos las rutas
app.use("/api", userRouter, tareaRouter);

app.listen(PUERTO, async () => {
  console.log(`Servidor levantado exitosamente en el puerto ${PUERTO}`);
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Base de datos sincronizada exitosamente");
});
