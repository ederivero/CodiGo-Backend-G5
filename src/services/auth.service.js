import { prisma } from "../prisma.js";

export class AuthService {
  static async login({ correo, password }) {
    // SELECT password, tipo_usuario FROM USUARIO WHERE correo= '...';
    // si no lo encuentra lanzara un error de not found
    const usuarioEncontrado = await prisma.usuario.findUnique({
      where: { correo },
      select: { password: true, tipoUsuario: true },
    });

    return { message: "Si existe" };
  }
}
