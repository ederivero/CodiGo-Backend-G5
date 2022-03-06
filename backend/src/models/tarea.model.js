import mongoose from "mongoose";

const tareaSchema = new mongoose.Schema(
  {
    nombre: {
      type: mongoose.Schema.Types.String,
      required: true,
      maxlength: 50,
    },
    status: {
      enum: ["POR_HACER", "HACIENDO", "HECHO"],
      required: true,
      default: "POR_HACER",
      type: mongoose.Schema.Types.String,
    },
    fecha_vencimiento: {
      type: mongoose.Schema.Types.Date,
      required: true,
    },
    usuarioId: {
      alias: "usuario_id",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    // creara las columnas para definir la fecha de creacion (created_at) y la fecha cuando el registro fue actualizado (updated_at)
    timestamps: true,
  }
);

export const Tarea = mongoose.model("tareas", tareaSchema);
