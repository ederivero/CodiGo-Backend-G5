import { Usuario } from "../models/usuarios.model.js";
import { hashSync } from "bcrypt";

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
    const usuarioEncontrado = await Usuario.findOne({ correo });
    console.log(usuarioEncontrado);
  }
}
