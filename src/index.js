import express, { json } from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(json());

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo exitosamente en el puerto ${PORT}`);
});
