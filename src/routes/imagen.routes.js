import { Router } from "express";
import Multer from "multer";

export const imagenRouter = Router();

// sirve para indicar el formato en la cual se va a almacenar el archivo entrante
// puede ser en disco (disco duro) o en memoria (RAM)
const almacenamiento = Multer.diskStorage({ destination: "media/" });

const multerMiddleware = Multer({ storage: almacenamiento });

// any > aceptara todos los archivos y mas de uno
// none > aceptara valores en formato texto (no aceptara archivos)
// array(nombre_campo, limite) > aceptara varios archivos definidos mediante un campo y opcionalmente un limite de cuantos archivos queremos recibir
// fields(campos) > acepta una mexcla de archivos especificados por los campos que vamosa recibir
// single(campo) > acepta UN solo archivo mediante esa llave
// NOTA: todos los archivos se almacenaran en el request (req) pero en el caso de single sera req.file mientras que en los demas sera req.files
imagenRouter.post(
  "/subir-imagen",
  multerMiddleware.single("imagen"),
  (req, res) => {
    console.log(req.file);
    return res.status(200).send();
  }
);
