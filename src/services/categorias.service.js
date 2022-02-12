import { Categoria } from "../models/categorias.model.js";

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
}
