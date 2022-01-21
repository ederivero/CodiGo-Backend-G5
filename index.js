import express, { json } from "express";
import cors from "cors";
// const express = require("express");
const productos = [
  {
    nombre: "Leche de almendras",
    precio: 9.5,
    estado: true,
  },
];

const app = express();
// middleware > es un intermediario entre todas las peticiones que se realicen a determinado endpoint o si no se indica a todas las peticiones de mi API
// que mi application de express podra entender toda la informacion enviada por el cliente siempre y cuando sea un json
app.use(json());

// para toda la aplicacion voy a utilizar la configuracion de los CORS
app.use(
  cors()
  // {
  // methods: ["GET", "POST"],
  // origin:'https://www.mipagina.com'
  // }
);
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

    // buscar ese producto por ese id (posicion del array) y si existe, retornar el producto 200
    // si no existe retornar un estado 200 e indicar en el message que el producto no existe
    // ayudita: que pasa si en js queremos ingresar a una posicion que no existe??
    if (productos[id - 1]) {
      // si existe
      return res.status(200).json({
        content: productos[id - 1],
      });
    } else {
      return res.status(400).json({
        message: "Producto no existe",
        content: null,
      });
    }
  })
  .put((req, res) => {
    const { id } = req.params;
    if (productos[id - 1]) {
      productos[id - 1] = req.body;

      return res.status(200).json({
        message: "Producto actualizado exitosamente",
        content: productos[id - 1],
      });
    } else {
      return res.status(400).json({
        message: "Producto no existe",
        content: null,
      });
    }
  })
  .delete((req, res) => {
    const { id } = req.params;
    if (productos[id - 1]) {
      const producto = productos[id - 1];

      productos.splice(id - 1, 1);

      return res.status(200).json({
        message: "Producto eliminado exitosamente",
        content: producto,
      });
    } else {
      return res.status(400).json({
        message: "Producto no existe",
        content: null,
      });
    }
  });

// se mantendra escuchando las consultas realizadas a este servidor mediante el puerto definido
app.listen(port, () => {
  // esto sucedera cuando se levante el servidor de express
  console.log(`Servidor levantado exitosamente! ${port}`);
});

// module.exports= {
//     app
// }
