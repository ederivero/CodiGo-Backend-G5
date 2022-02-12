import { ImagenService } from "../services/imagen.service.js";

export async function subirImagen(req, res) {
  console.log(req.file); // aca se almacera la imagen subida previamente al servidor gracias a multer
  // si no instalamos multer entonces el req.file sera undefined ya que express no lee por defecto los archivos
  const { id } = req.params;
  try {
    const respuesta = await ImagenService.subirImagen(id, req.file.path);

    return res.status(200).json(respuesta);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error al subir la imagen", content: error.message });
  }
}
