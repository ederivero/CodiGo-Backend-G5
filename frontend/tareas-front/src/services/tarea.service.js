import axios from "axios";

const request = axios.create({
  baseURL: `${process.env.REACT_APP_BACK_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const crearTarea = (data, token) => {
  return request.post("/tarea", data, {
    headers: { authorization: `Bearer ${token}` },
  });
};

export const listarTarea = (token) => {
  return request.get("/tarea", {
    headers: { authorization: `Bearer ${token}` },
  });
};

// TODO: actualizarTarea eliminarTarea
