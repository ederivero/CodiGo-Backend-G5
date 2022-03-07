import { Tarea } from "../models/tarea.model.js";
import { Usuario } from "../models/usuario.model.js";

export class TareaService {
  static async crearTarea(data, usuarioId) {
    try {
      const usuario = await Usuario.findById(usuarioId);
      if (!usuario) {
        throw new Error("Usuario no existe");
      }

      const result = await Tarea.create({ ...data, usuarioId });

      return result;
    } catch (e) {
      if (e instanceof Error) {
        return {
          message: "Error al crear la tarea",
          content: e.message,
        };
      }
    }
  }

  static async listaTareasDelUsuario(usuarioId) {
    console.log(usuarioId);
    const result = await Tarea.find({ usuarioId });

    return result;
  }
}
