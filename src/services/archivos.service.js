import { s3 } from "../s3.js";

export class ArchivosService {
  // data = { productoId: 1, contentType: 'image/png', ext:'png', filename: 'mayonesa.png' }
  static async crearArchivo(data) {
    const path = `archivos/productos/${data.id}`;

    const url = s3.getSignedUrl("putObject", {
      Key: `${path}/${data.filename}.${data.ext}`,
      ContentType: data.contentType,
      Bucket: process.env.AWS_BUCKET,
      Expires: process.env.AWS_SIGNED_EXPIRES_IN,
    });

    return url;
  }
}
