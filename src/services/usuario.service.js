import { Usuario } from "../models/usuarios.model.js";
import { hashSync } from "bcrypt";
import cryptojs from "crypto-js";
import sgMail from "@sendgrid/mail";
export class usuarioService {
  static async registro(data) {
    try {
      const password = hashSync(data.password, 10);

      const usuarioCreado = await Usuario.create({ ...data, password });
      return usuarioCreado;
    } catch (error) {
      return { message: "Error al crear el usuario", content: error.message };
    }
  }

  static async olvidePassword(correo) {
    console.log(correo);
    // al hacer la busqueda con un filtro de una columna tenemos que utilizar el nombre que hemos designado en el schema y no el 'alias'
    const usuarioEncontrado = await Usuario.findOne({ usuarioCorreo: correo });
    if (usuarioEncontrado) {
      const token = cryptojs.AES.encrypt(
        JSON.stringify({
          correo: usuarioEncontrado.usuarioCorreo,
          nombre: usuarioEncontrado.usuarioNombre,
        }),
        process.env.SECRET_CRYPT_PASSWORD
      ).toString();

      console.log(token);

      // aca enviaremos el correo
      const respuesta = await sgMail.send({
        from: "ederiveroman@gmail.com",
        text: `Ups parece que has olvidado tu contraseña, ingresa a este link para restaurar la contraseña http://localhost:3000?token=${token}`,
        subject: "Restauracion de la contraseña",
        to: usuarioEncontrado.usuarioCorreo,
        html: `
        <h2>Hola has olvidado la contraseña?</h2>
        <p>Ingresa al siguiente link para restaurarla</p><code>http://localhost:3000?token=${token}</code>
        `,
      });
      console.log(respuesta);
    }
    console.log(usuarioEncontrado);
  }

  static async resetPassword(hash, password) {
    const tokenDecodificada = JSON.parse(
      cryptojs.AES.decrypt(hash, process.env.SECRET_CRYPT_PASSWORD).toString(
        cryptojs.enc.Utf8
      )
    );

    console.log(tokenDecodificada);

    // verificar si existe ese usuario (tokenDecodificada.correo) y si existe entonces cambiar la contraseña con el nuevo password, hashear la contraseña
  }
}
