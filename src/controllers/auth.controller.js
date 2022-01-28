// export const login = async ()=>{...}
import { AuthService } from "../services/auth.service.js";
import { loginDto } from "../services/dtos/request/login.dto.js";

export async function login(req, res) {
  const { correo, password } = req.body;
  try {
    loginDto({ correo, password });

    const result = await AuthService.login({ correo, password });

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: "Error al hacer el login",
    });
  }
}
