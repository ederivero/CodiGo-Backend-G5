import mongoose from "mongoose";

const categoriaProductoSchema = new mongoose.Schema({
  categoriaId: {
    type: mongoose.Schema.Types.ObjectId,
    alias: "categoria_id",
    required: true,
  },
  productoId: {
    type: mongoose.Schema.Types.ObjectId,
    alias: "producto_id",
    required: true,
  },
});

export const CategoriaProducto = mongoose.model(
  "categoriaProducto",
  categoriaProductoSchema
);
