import { Categoria } from "../models/categorias.model.js";
import fs from "fs";
export class ImagenService {
  static async subirImagen(id, nombreImagen) {
    // Buscar la categoria segun su id, si existe
    const categoriaEncontrada = await Categoria.findById(id).catch(
      async (error) => {
        await fs.promises.unlink(nombreImagen);
        throw new Error("Categoria no existe");
      }
    );

    // si no existe emitiremos un error
    if (!categoriaEncontrada) {
      // elimina un archivo permanentemente de nuestro servidor
      await fs.promises.unlink(nombreImagen);

      throw new Error("Categoria no existe");
    }

    // actualizaremos su campo categoriaImagen y le pondremos el valor de nombreImagen
    // new : true sirve para indicar a mongoose que nos retorne la categoria YA actualizada, si no le ponemos o ponemos new:false entonces nos retornara la categoria ANTES de actualizarce
    const categoriaActualizada = await Categoria.findOneAndUpdate(
      { _id: id },
      { categoriaImagen: nombreImagen },
      { new: true }
    );

    return categoriaActualizada;
  }
}
