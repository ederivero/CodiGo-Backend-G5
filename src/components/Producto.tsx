import React from "react";
import { IProducto } from "../services/producto.service";

export const Producto = ({
  imagen,
  nombre,
  precio,
  tipoProducto,
}: IProducto) => {
  return (
    <>
      <div className="card">
        <p className="tipoProducto">{tipoProducto.nombre}</p>
        <img
          src={
            imagen ??
            "https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725184-stock-illustration-no-image-available-icon-flat.jpg"
          }
          alt=""
        />
        <h1>{nombre}</h1>
        <p>
          A solo <span>S/ {precio}</span>
        </p>
      </div>
    </>
  );
};
