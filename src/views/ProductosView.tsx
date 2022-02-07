import React, { useEffect, useState } from "react";
import { Producto } from "../components/Producto";
import { getProductos, IProducto } from "../services/producto.service";

export const ProductosView = () => {
  const [productos, setProductos] = useState<IProducto[]>();

  useEffect(() => {
    const requestProductos = async () => {
      const result = await getProductos();
      console.log(result.data.productos);

      setProductos(result.data.productos);
    };
    requestProductos();
  }, []);

  return (
    <div className="productos">
      {productos?.map((producto) => (
        <Producto key={producto.id} {...producto} />
      ))}
    </div>
  );
};
