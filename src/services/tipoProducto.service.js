import { prisma } from "../prisma.js";

export class TipoProductoService {
  // los metodos staticos son metodos que sirven para utilizarce sin hacer una instancia, y de la misma manera, cuando se realice la instancia no se podra acceder a dicho metodo, estos metodos se usan mas que todo para clases abstractas en la cual se usa para plantillas para herencias de otras clases

  static async crearTipoProducto({ nombre }) {
    const nuevoTipoProducto = await prisma.tipoProducto.create({
      data: {
        nombre,
      },
    });

    return { content: nuevoTipoProducto };
  }

  static async listTipoProducto() {
    // hace el servicio que devuelva todos los tipo productos, ademas agregar el controlador y agregar la ruta que debe ser la misma que el post

    const listaProductos = await prisma.tipoProducto.findMany();
    return { content: listaProductos };
  }
}
