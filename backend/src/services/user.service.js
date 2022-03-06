import { Usuario } from "../models/usuario.model.js";
import jwt from "jsonwebtoken";

export class UserService {
  static async register(data) {
    try {
      const user = await Usuario.create(data);
      // TODO: crear el JWT para que pueda acceder
      const token = jwt.sign(
        {
          id: user._id,
          nombre: user.nombre,
          apellido: user.apellido,
        },
        process.env.SECRET_JWT,
        {
          expiresIn: "5h",
        }
      );

      return {
        token,
      };
    } catch (e) {
      if (e instanceof Error) {
        return {
          message: "Hubo un error al crear el usuario",
          content: e.message,
        };
      }
    }
  }
}
