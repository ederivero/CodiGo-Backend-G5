import { prisma } from "../prisma.js";
import { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthService {
  static async login({ correo, password }) {
    // SELECT password, tipo_usuario FROM USUARIO WHERE correo= '...';
    // si no lo encuentra lanzara un error de not found
    const usuarioEncontrado = await prisma.usuario.findUnique({
      where: { correo },
      select: { password: true, tipoUsuario: true, id: true },
      rejectOnNotFound: true,
    });

    const resultado = compareSync(password, usuarioEncontrado.password);

    if (resultado) {
      const token = jwt.sign(
        { id: usuarioEncontrado.id, mensaje_oculto: "Hola soy un mensaje" },
        "ArribaPeru",
        // se puede pasar un valor numerico (que sera en segundos) o un string indicando el formato de la sgte manera '7d' (7 dias) '10h' (10 horas), '2 days' (2 dias), si le ponemos '100' entonces sera un valor expresado en milisegundos
        { expiresIn: 100 }
      );

      return { message: "Si es el usuario", token };
    } else {
      return { message: "Credenciales incorrectas" };
    }
  }
}
