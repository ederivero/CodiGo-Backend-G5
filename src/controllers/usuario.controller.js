import { usuarioDto } from "../dto/request/usuario.dto.js";
import { usuarioService } from "../services/usuario.service.js";

export async function crearUsuario(req, res) {
  try {
    const data = usuarioDto(req.body);
    console.log(data);
    const resultado = await usuarioService.registro(data);

    if (resultado.message) {
      // hubo un error porque en el json hay la llave 'message'
      return res.status(400).json(resultado);
    } else {
      // fue exitosa la creacion
      return res.status(201).json(resultado);
    }
  } catch (error) {
    return res.status(400).json({
      message: "Error al registrar el usuario",
      content: error.message,
    });
  }
}
