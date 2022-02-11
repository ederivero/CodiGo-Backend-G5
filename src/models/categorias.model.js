import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema({
  // aca vendran todas las 'columnas' de la coleccion
  categoriaNombre: {
    type: mongoose.Schema.Types.String,
    alias: "nombre",
    required: true,
  },
  categoriaEstado,
  categoriaImagen,
});
