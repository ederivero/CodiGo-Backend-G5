import { prisma } from "../prisma.js";

export class TipoProductoService {
  // los metodos staticos son metodos que sirven para utilizarce sin hacer una instancia, y de la misma manera, cuando se realice la instancia no se podra acceder a dicho metodo, estos metodos se usan mas que todo para clases abstractas en la cual se usa para plantillas para herencias de otras clases
  static async crearTipoProducto({ nombreProducto, usuarioId }) {
    const usuarioEncontrado = await prisma.usuario.findUnique({
      where: { id: usuarioId },
    });

    console.log(usuarioEncontrado);

    return { message: "ok" };
  }
}
