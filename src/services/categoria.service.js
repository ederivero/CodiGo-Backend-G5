import { Categoria } from "../models/categoria.model.js";

export class CategoriaService {
  static async crear(data) {
    try {
      const nuevaCategoria = await Categoria.create(data);
      return nuevaCategoria;
    } catch (error) {
      return {
        message: error.message,
      };
    }
  }
}
