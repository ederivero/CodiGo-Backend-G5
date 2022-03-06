import mongoose from "mongoose";
import { hashSync } from "bcrypt";

const usuarioSchema = new mongoose.Schema(
  {
    correo: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true,
    },
    password: {
      type: mongoose.Schema.Types.String,
      required: true,
      set: (valor) => {
        // encriptacion de la contraseña
        // el set se ejecutara cuando vayamos a agregar o actualizar un registro en la bd y antes de este sea guardado se llamara automaticamente para esta columna
        const cryptPass = hashSync(valor, 10);
        return cryptPass;
      },
    },
    nombre: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    apellido: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    pais: {
      enum: [
        "BRAZIL",
        "COLOMBIA",
        "PERU",
        "CHILE",
        "URUGUAY",
        "ARGENTINA",
        "PARAGUAY",
        "BOLIVIA",
        "ECUADOR",
        "GUYANA FRANCESA",
        "VENEZUELA",
        "SURINAM",
      ],
      type: mongoose.Schema.Types.String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Usuario = mongoose.model("usuarios", usuarioSchema);
