import express, { json } from "express";

const app = express();

app.use(json());

const PUERTO = process.env.PORT ?? 3000;

app.get("/api/status", (req, res) => {
  return res.json({
    date: new Date(),
  });
});

app.listen(PUERTO, () => {
  console.log(`Servidor levantado exitosamente en el puerto ${PUERTO}`);
});
