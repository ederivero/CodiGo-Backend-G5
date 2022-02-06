import { productoDto } from "../services/dtos/request/producto.dto.js";
import { ProductoService } from "../services/producto.service.js";

export async function crear(req, res) {
  // crear el archivo producto.dto.js en los dtos/request y agregar las validaciones que vean pertinentes
  try {
    const data = productoDto(req.body);

    const resultado = await ProductoService.crearProducto(data);

    return res.status(201).json(resultado);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}

export async function devolver(req, res) {
  // 1. req.params
  // producto/1

  // 2. req.query
  // producto?email=e@c.com&nombre=eduardo&apellido=juarez
  const { id } = req.params;
  const resultado = await ProductoService.devolverProducto(id);

  return res.json(resultado);
}

export async function devolverProductos(req, res) {
  const resultado = await ProductoService.listarProductos();

  return res.json(resultado);
}

export async function eliminarProducto(req, res) {
  const { id } = req.params;
  const resultado = await ProductoService.eliminarProducto(+id);

  return res.status(201).json(resultado);
}
