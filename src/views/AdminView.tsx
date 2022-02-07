import React from "react";
import { useNavigate } from "react-router-dom";

export const AdminView = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-view">
      <button
        className="btn-admin"
        onClick={() => {
          navigate("/crear-producto");
        }}
      >
        Crear Producto
      </button>
      <button className="btn-admin">Eliminar Producto</button>
      <button className="btn-admin">Crear Tipo de Producto</button>
    </div>
  );
};
