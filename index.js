import express, { json } from "express";
// const express = require("express");
const productos = [];

const app = express();
// middleware > es un intermediario entre todas las peticiones que se realicen a determinado endpoint o si no se indica a todas las peticiones de mi API
// que mi application de express podra entender toda la informacion enviada por el cliente siempre y cuando sea un json
app.use(json());

const port = 3000;

app.get("/", (req, res) => {
  // req > es la informacion que me viene del cliente
  // res > es la respuesta que le dare al cliente
  res.status(200).json({
    message: "Peticion realizada exitosamente",
  });
});

app.post("/producto", (req, res) => {
  console.log(req.body);

  if (req.body) {
    productos.push(req.body);
    res.status(201).json({
      message: "Producto agregado exitosamente",
      producto: req.body,
    });
  } else {
    res.status(400).json({
      message: "Informacion incorrecta",
    });
  }
});

// mediante el endpoint /productos devolver todos los productos en el siguiente formato:
// {
//     message: 'Los productos son:',
//     content: [...]
// }
// estado > 200
app.get("/productos", (req, res) => {
  res.status(200).json({
    message: "Los productos son:",
    content: productos,
  });
});

app
  .route("/producto/:id")
  .get((req, res) => {
    // destructuracion
    const { id } = req.params;
    // const nuevoId = req.params.id
    console.log(req.params);
    res.json({
      message: null,
    });
  })
  .put((req, res) => {})
  .delete((req, res) => {});

// se mantendra escuchando las consultas realizadas a este servidor mediante el puerto definido
app.listen(port, () => {
  // esto sucedera cuando se levante el servidor de express
  console.log(`Servidor levantado exitosamente! ${port}`);
});

// module.exports= {
//     app
// }
