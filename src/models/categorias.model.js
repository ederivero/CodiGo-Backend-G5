import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema(
  {
    // aca vendran todas las 'columnas' de la coleccion
    categoriaNombre: {
      type: mongoose.Schema.Types.String,
      alias: "nombre",
      required: true,
      maxlength: 50,
    },
    categoriaEstado: {
      type: mongoose.Schema.Types.Boolean,
      alias: "estado",
      default: true,
      required: true,
    },
    categoriaImagen: {
      type: mongoose.Schema.Types.String,
      // required: false,
      alias: "imagen",
    },
  },
  { timestamps: { createdAt: "fecha_creacion", updatedAt: false } }
);

export const Categoria = mongoose.model("categoria", categoriaSchema);
