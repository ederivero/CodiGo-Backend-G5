import React, { useEffect, useState } from "react";
import { crearImagen, subirImagen } from "../services/imagen.service";
import {
  crearProducto,
  getTipoProductos,
  ICrearProducto,
  ITIpoProducto,
} from "../services/producto.service";

export const CrearProductoView = () => {
  const [tipoProductos, setTipoProductos] = useState<ITIpoProducto[]>();
  const [nuevoProducto, setNuevoProducto] = useState<ICrearProducto>({
    nombre: "",
    precio: 0,
    tipoProducto: 0,
  });

  const [archivo, setArchivo] = useState<any>();
  const [file, setFile] =
    useState<{ ext: string; filename: string; contentType: string }>();

  useEffect(() => {
    const llenarTipoProductos = async () => {
      const {
        data: { content },
      } = await getTipoProductos();
      setTipoProductos(content);
    };
    llenarTipoProductos();
  }, []);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await crearProducto(nuevoProducto);

    if (result.status === 201 && file) {
      const {
        data: { url },
      } = await crearImagen({ ...file, productoId: result.data.content.id });

      const { status } = await subirImagen(url, file.contentType, archivo);
      console.log("el estado de la subida a aws es", status);
    }
    console.log(result.data);
  };

  const changeValue = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNuevoProducto({
      ...nuevoProducto,
      [e.currentTarget.id]: e.currentTarget.value,
    });
    // setNuevoProducto((prev) => ({
    //   ...prev,
    //   [e.currentTarget.id]: e.currentTarget.value,
    // }));
  };

  const addFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.files?.item(0));

    setArchivo(e.currentTarget.files?.item(0));
    if (e.currentTarget.value) {
      const ext = e.currentTarget.value.split(".").at(-1);
      let contentType;
      switch (ext) {
        case "jpg":
          contentType = "image/jpeg";
          break;
        case "png":
          contentType = "image/png";
          break;
        case "jpeg":
          contentType = "image/jpeg";
          break;
      }
      const filename = e.currentTarget.value.split("\\").at(-1)?.split(".")[0];

      if (filename && ext && contentType) {
        setFile({ ext, filename, contentType });
      }
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            onChange={changeValue}
            value={nuevoProducto.nombre}
          />
        </div>
        <div>
          <label htmlFor="precio">Precio</label>
          <input
            type="number"
            id="precio"
            onChange={changeValue}
            value={nuevoProducto.precio}
          />
        </div>
        <div>
          <label htmlFor="tipo">Tipo Producto</label>
          <select
            name=""
            id="tipoProducto"
            onChange={changeValue}
            value={nuevoProducto.tipoProducto}
          >
            {tipoProductos?.map((tipoProducto) => (
              <option key={tipoProducto.id} value={tipoProducto.id}>
                {tipoProducto.nombre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="imagen">Imagen</label>
          <input
            type="file"
            id="imagen"
            accept="image/png, image/gif, image/jpeg"
            onChange={addFile}
          />
        </div>
        <div>
          <button>Crear Producto</button>
        </div>
      </form>
    </div>
  );
};
