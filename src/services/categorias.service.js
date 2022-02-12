import { Categoria } from "../models/categorias.model.js";
import fs from "fs";

export class CategoriaService {
  static async crear(data) {
    try {
      const nuevaCategoria = await Categoria.create(data);

      return nuevaCategoria;
    } catch (error) {
      console.error(error);
    }
  }

  static async devolver() {
    // select * from categorias;
    const categorias = await Categoria.find();
    return categorias;
  }

  static async eliminar(id) {
    try {
      // buscar si la categoria existe mediante su id
      const categoriaEncontrada = await Categoria.findById(id);
      // ver si esa categoria tiene una imagen
      if (categoriaEncontrada.categoriaImagen) {
        // si tiene la imagen eliminarla con el fs.promises.unlink ...
        await fs.promises.unlink(categoriaEncontrada.categoriaImagen);
      }
      // recien eliminar la categoria
      const categoriaEliminada = await Categoria.findByIdAndDelete(id);

      return categoriaEliminada;
    } catch (error) {
      console.error(error);
    }
  }
}
