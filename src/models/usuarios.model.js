import mongoose from "mongoose";

const direccionSchema = new mongoose.Schema({
  direccionCalle: {
    type: mongoose.Schema.Types.String,
    alias: "calle",
  },
  direccionNumero: {
    type: mongoose.Schema.Types.Number,
    alias: "numero",
  },
  direccionCodigoPostal: {
    type: mongoose.Schema.Types.String,
    alias: "cod_postal",
  },
});

const usuarioSchema = new mongoose.Schema({
  usuarioCorreo: {
    type: mongoose.Schema.Types.String,
    alias: "correo",
    unique: true,
  },
  usuarioNombre: {
    type: mongoose.Schema.Types.String,
    alias: "nombre",
  },
  usuarioApellido: {
    type: mongoose.Schema.Types.String,
    alias: "apellido",
  },
  usuarioPassword: {
    type: mongoose.Schema.Types.String,
    alias: "password",
  },
  usuarioDirecciones: {
    type: [direccionSchema],
    alias: "usuario_direcciones",
  },
});

export const Usuario = mongoose.model("usuarios", usuarioSchema);
