import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
  nombre: {
    type: mongoose.Schema.Types.String,
    required: true,
    maxlength: 100,
  },
  precio: {
    type: mongoose.Schema.Types.Decimal128,
    default: 0.0,
    max: 100.0,
  },
  tipo: {
    type: mongoose.Schema.Types.String,
    enum: ["ABARROTES", "HIGIENE PERSONAL", "OTROS"],
    default: "OTROS",
  },
  estado: mongoose.Schema.Types.Boolean,

  categoriaProducto: {
    type: [mongoose.Schema.Types.ObjectId],
  },
});

export const Producto = mongoose.model("productos", productoSchema);
