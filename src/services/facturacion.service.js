import { Cliente } from "../models/cliente.model.js";
import { Comprobante } from "../models/comprobante.model.js";
import { Producto } from "../models/producto.model.js";

export class FacturacionService {
  static async generarComprobante(data, tipo) {
    let tipo_de_comprobante;
    const { ref_doc, items, cliente } = data;
    // ejemplo > ref_doc = {serie: 'BBB1', numero: 1}

    let serie;

    switch (tipo) {
      case "FACTURA":
        tipo_de_comprobante = 1;
        serie = "FFF1";
        break;

      case "BOLETA":
        tipo_de_comprobante = 2;
        serie = "BBB1";
        break;

      case "NOTA_CREDITO":
        tipo_de_comprobante = 3;
        serie = ref_doc.serie.search("B") != -1 ? "BBB1" : "FFF1";
        break;

      case "NOTA_DEBITO":
        tipo_de_comprobante = 4;
        serie = ref_doc.serie.search("B") != -1 ? "BBB1" : "FFF1";
        break;
      default:
        throw Error("Tipo invalido");
    }

    // hacer un select dependiento del tipo
    const comprobante = await Comprobante.findOne({ tipo }).sort({
      numero: "desc",
      serie: "desc",
    });
    // FFF1 4
    const numero = comprobante ? comprobante.numero++ : 1;
    // if (!comprobante) {
    //   numero = 1;
    // } else {
    //   numero = comprobante.numero++;
    // }

    // traer la informacion del cliente
    const clienteEncontrado = await Cliente.findById(cliente);
    let total = 0;

    const productos = await Promise.all(
      items.map(async ({ id, cantidad }) => {
        const productoEncontrado = await Producto.findById(id);

        total = total + productoEncontrado.precio * cantidad;
        return {
          unidad_de_medida: "NIU",
          codigo: productoEncontrado._id,
          descripcion: productoEncontrado.nombre,
          cantidad,
          valor_unitario: productoEncontrado.precio / 1.18,
          precio_unitario: productoEncontrado.precio,
          subtotal: (productoEncontrado.precio / 1.18) * cantidad,
          tipo_de_igv: 1,
          total: productoEncontrado.precio * cantidad,
          igv: (productoEncontrado.precio * cantidad) / 1.18,
          anticipo_regularizacion: false,
        };
      })
    );

    let cliente_tipo_de_documento;
    switch (clienteEncontrado.tipo_documento) {
      case "DNI":
        cliente_tipo_de_documento = "1";
        break;
      case "RUC":
        cliente_tipo_de_documento = "6";
        break;
      case "CE":
        cliente_tipo_de_documento = "4";
        break;
      case "PASAPORTE":
        cliente_tipo_de_documento = "7";
        break;
      default:
        cliente_tipo_de_documento = "-";
        break;
    }

    const fecha = new Date();
    const fecha_de_emision =
      fecha.getDate() < 9
        ? "0" + fecha.getDate()
        : fecha.getDate() + "-" + (fecha.getMonth() + 1) < 9
        ? "0" + fecha.getMonth() + 1
        : fecha.getMonth() + 1 + "-" + fecha.getFullYear();

    const peticionNubefact = {
      operacion: "generar_comprobante",
      tipo_de_comprobante,
      serie,
      numero,
      sunat_transaction: 1,
      cliente_tipo_de_documento,
      cliente_numero_de_documento: clienteEncontrado.numero_documento,
      cliente_denominacion: clienteEncontrado.nombre,
      cliente_direccion: clienteEncontrado.direccion,
      cliente_email: clienteEncontrado.correo,
      fecha_de_emision,
      items: productos,
      enviar_automaticamente_a_la_sunat: true,
      enviar_automaticamente_al_cliente: true,
      formato_de_pdf: "A4",
      porcentaje_de_igv: 18.0,
      // FALTA
      total,
      total_gravada: total / 1.18,
      total_igv: total - total_gravada,
    };
  }

  static async consultarComprobante(id) {}
}
