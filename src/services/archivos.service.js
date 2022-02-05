import { s3 } from "../s3.js";
import { prisma } from "../prisma.js";

export class ArchivosService {
  // data = { productoId: 1, contentType: 'image/png', ext:'png', filename: 'mayonesa.png' }
  static async crearArchivo(data) {
    // primero validar si el producto existe
    const productoEncontrado = await prisma.producto.findUnique({
      where: { id: data.productoId },
      select: { imagen: true },
      rejectOnNotFound: true,
    });

    // validar si ese producto no tiene imagen
    // si tiene imagen indicar que ya existe una imagen previa
    if (productoEncontrado.imagen !== null) {
      // return indicando tal cosa
      return {
        message:
          "El producto ya tiene una imagen, primero eliminela y luego vuelva a crear el archivo",
      };
    }

    // actualizar el producto en su columna imagen agregar el valor de la propiedad Key

    const path = `archivos/productos/${data.productoId}`;

    const Key = `${path}/${data.filename}.${data.ext}`;

    const url = s3.getSignedUrl("putObject", {
      Key,
      ContentType: data.contentType,
      Bucket: process.env.AWS_BUCKET,
      Expires: +process.env.AWS_SIGNED_EXPIRES_IN,
    });

    // actualizamos el producto con su informacion de la imagen
    await prisma.producto.update({
      data: { imagen: Key },
      where: { id: data.productoId },
    });

    return url;
  }

  static devolverURL(path) {
    return s3.getSignedUrl("getObject", {
      Key: path,
      Bucket: process.env.AWS_BUCKET,
      Expires: +process.env.AWS_SIGNED_EXPIRES_IN,
    });
  }
}
