import { UserService } from "../services/user.service.js";

export async function register(req, res) {
  // TODO: hacer el dto
  // const data = RegisterDto(req.data)
  const result = await UserService.register(req.body);

  return res.status(result.message ? 400 : 201).json(result);
}
