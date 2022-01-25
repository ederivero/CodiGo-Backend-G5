import { prisma } from "../prisma.js";

export class ProductosServices {
  static async find() {
    return prisma.producto.findMany();
  }

  static async create(input) {
    const nuevoProducto = await prisma.producto.create({ data: input });
    return nuevoProducto;
  }
}
