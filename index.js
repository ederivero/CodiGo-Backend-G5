import express from "express";
// const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // req > es la informacion que me viene del cliente
  // res > es la respuesta que le dare al cliente
  res.status(200).json({
    message: "Peticion realizada exitosamente",
  });
});

// se mantendra escuchando las consultas realizadas a este servidor mediante el puerto definido
app.listen(port, () => {
  // esto sucedera cuando se levante el servidor de express
  console.log(`Servidor levantado exitosamente! ${port}`);
});

// module.exports= {
//     app
// }
