import { ProductosServices } from "../services/productos.service.js";

export async function find(req, res) {
  const productos = await ProductosServices.find();

  res.status(200).json({ content: productos });
}

export async function create(req, res) {
  const productoCreado = await ProductosServices.create(req.body);

  res.status(201).json({
    content: productoCreado,
  });
}
