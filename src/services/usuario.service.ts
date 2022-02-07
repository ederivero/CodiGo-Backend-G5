import axios from "axios";

interface ILogin {
  correo: string;
  password: string;
}

const BASE_URL = "http://127.0.0.1:3001";
const axiosRequest = axios.create({ baseURL: BASE_URL });

export const login = (data: ILogin) => {
  return axiosRequest.post("/login", data);
};
