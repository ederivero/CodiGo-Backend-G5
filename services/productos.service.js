import { prisma } from "../prisma.js";

export class ProductosServices {
  static async find() {
    return prisma.producto.findMany();
  }

  static async create(input) {
    try {
      const nuevoProducto = await prisma.producto.create({ data: input });
      return nuevoProducto;
    } catch (e) {
      // console.log(e);
      throw Error("Error al crear el producto");
    }
  }
}
