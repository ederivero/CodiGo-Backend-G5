import express from "express";
import prisma from "@prisma/client";
const { PrismaClient } = prisma;

const app = express();
// nullish coalesching operator
// valida el contenido de la izquierda y si es nulo o undefined entonces procedera a tomar el valor de la derecha
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo exitosamente 🚀 en el puerto ${PORT}`);
});
