import mongoose from "mongoose";

const direccionSchema = new mongoose.Schema(
  {
    zip: { type: mongoose.Schema.Types.String, minlength: 2 },
    calle: mongoose.Schema.Types.String,
    numero: mongoose.Schema.Types.Number,
  },
  // evitar la creacion del id de este schema y esto se utiliza solamente para cuando este schema estara dentro de otro, JAMAS puede haber un schema sin _id ya que carecerian de su identificador
  { _id: false }
);

const clienteSchema = new mongoose.Schema({
  nombre: { type: mongoose.Schema.Types.String },
  apellido: { type: mongoose.Schema.Types.String },
  correo: { type: mongoose.Schema.Types.String, unique: true },
  direccion: { type: direccionSchema }, // direccionSchema
  tipo_documento: {
    enum: ["DNI", "RUC", "CE", "PASAPORTE"],
    type: mongoose.Schema.Types.String,
    default: "DNI",
  },
  numero_documento: {
    type: mongoose.Schema.Types.String,
  },
});

export const Cliente = mongoose.model("clientes", clienteSchema);
