import axios, { AxiosResponse } from "axios";

const BASE_URL = "http://127.0.0.1:3001";
const axiosRequest = axios.create({ baseURL: BASE_URL });

export interface IProducto {
  id: number;
  nombre: string;
  precio: number;
  imagen?: string;
  tipoProductoId: number;
  tipoProducto: {
    id: number;
    nombre: string;
  };
}

interface IResponseProductos {
  productos: IProducto[];
}

export interface ITIpoProducto {
  id: number;
  nombre: string;
}

interface ITipoProductosResponse {
  content: ITIpoProducto[];
}

export interface ICrearProducto {
  nombre: string;
  precio: number;
  tipoProducto: number;
}

interface ICrearProductoResponse {
  content: {
    id: number;
    nombre: string;
    precio: number;
    tipoProductoId: number;
  };
}

export const getProductos = () => {
  return axiosRequest.get<any, AxiosResponse<IResponseProductos>>("/productos");
};

export const getTipoProductos = () => {
  return axiosRequest.get<unknown, AxiosResponse<ITipoProductosResponse>>(
    "/tipo-producto"
  );
};

export const crearProducto = (data: ICrearProducto) => {
  return axiosRequest.post<unknown, AxiosResponse<ICrearProductoResponse>>(
    "/producto",
    data,
    {
      headers: { Authorization: `Bearer ${localStorage.getItem("user")}` },
    }
  );
};
