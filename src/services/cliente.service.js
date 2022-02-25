import { Cliente } from "../models/cliente.model.js";

export class ClienteService {
  static async crear(data) {
    try {
      const nuevoCliente = await Cliente.create(data);

      return nuevoCliente;
    } catch (error) {
      return {
        message: error.message,
      };
    }
  }
}
