import mongoose from "mongoose";

const comprobanteSchema = new mongoose.Schema({
  numero: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  serie: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  tipo: {
    type: mongoose.Schema.Types.String,
    enum: ["FACTURA", "BOLETA", "NOTA_CREDITO", "NOTA_DEBITO"],
    required: true,
  },
  pdf: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  xml: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  cdr: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

export const Comprobante = mongoose.model("comprobantes", comprobanteSchema);
