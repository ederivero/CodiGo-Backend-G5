import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema({
  nombre: {
    type: mongoose.Schema.Types.String,
    maxlength: 20,
    minlength: 2,
    required: true,
  },
  color: {
    type: mongoose.Schema.Types.String,
    default: "#000000",
    maxlength: 7,
  },
});
