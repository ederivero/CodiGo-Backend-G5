import axios, { AxiosResponse } from "axios";

const BASE_URL = "http://127.0.0.1:3001";
const axiosRequest = axios.create({ baseURL: BASE_URL });

interface ICrearImagen {
  ext: string;
  filename: string;
  contentType: string;
  productoId: number;
}

interface ICrearImagenResponse {
  url: string;
}

export const crearImagen = (data: ICrearImagen) => {
  return axiosRequest.post<unknown, AxiosResponse<ICrearImagenResponse>>(
    "/archivo",
    data,
    {
      headers: { Authorization: `Bearer ${localStorage.getItem("user")}` },
    }
  );
};

export const subirImagen = (url: string, contentType: string, file: any) => {
  console.log(contentType);

  return axios.put(url, file, { headers: { "Content-Type": contentType } });
};
