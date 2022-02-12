import { Router } from "express";
import Multer from "multer";
import { nanoid } from "nanoid";
import { subirImagen } from "../controllers/imagen.controller.js";
export const imagenRouter = Router();

// sirve para indicar el formato en la cual se va a almacenar el archivo entrante
// puede ser en disco (disco duro) o en memoria (RAM)
const almacenamiento = Multer.diskStorage({
  destination: "src/media/",
  // esto nos permite cambiar el nombre con el cual se guardara el archivo en nuestro servidor
  filename: (req, archivo, callback) => {
    const id = nanoid(5);
    const nombre = archivo.originalname;

    // como hacemos para evitar que si esa imagen ya existe no se sobre escriba??
    callback(null, id + nombre);
  },
});

const multerMiddleware = Multer({
  storage: almacenamiento,
  // bytes * 1024 > 1 kb * 1024 > 1mb * 1024 > 1gb
  limits: { fileSize: 5 * 1024 * 1024 },
});

// any > aceptara todos los archivos y mas de uno
// none > aceptara valores en formato texto (no aceptara archivos)
// array(nombre_campo, limite) > aceptara varios archivos definidos mediante un campo y opcionalmente un limite de cuantos archivos queremos recibir
// fields(campos) > acepta una mexcla de archivos especificados por los campos que vamosa recibir
// single(campo) > acepta UN solo archivo mediante esa llave
// NOTA: todos los archivos se almacenaran en el request (req) pero en el caso de single sera req.file mientras que en los demas sera req.files
imagenRouter.post(
  "/subir-imagen/:id",
  multerMiddleware.single("imagen"),
  subirImagen
);
