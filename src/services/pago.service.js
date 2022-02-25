import mercadopago from "mercadopago";
import { Cliente } from "../models/cliente.model.js";
import { Producto } from "../models/producto.model.js";

export class PagoService {
  static async generarPreferenciaDePago({ items, cliente }) {
    // https://www.mercadopago.com.pe/developers/es/reference/preferences/_checkout_preferences/post
    try {
      // buscar ese cliente
      const clienteEncontrado = await Cliente.findById(cliente);
      // buscar esos productos (items)
      // hacer la busqueda de los productos usando el .map() (Usar el promise.all())
      const productosEncontrados = await Promise.all(
        items.map(async ({ id, cantidad }) => {
          const productoEncontrado = await Producto.findById(id);

          return { item: productoEncontrado, cantidad };
        })
      );

      // early return function
      const itemsMP = productosEncontrados.map(({ item, cantidad }) => ({
        id: item._id,
        title: item.nombre,
        quantity: cantidad,
        unit_price: +item.precio,
        currency_id: "PEN",
      }));

      const preferencia = await mercadopago.preferences.create({
        payer: {
          name: clienteEncontrado.nombre, // obligatorio
          surname: clienteEncontrado.apellido, // obligatorio
          address: {
            zip_code: clienteEncontrado.direccion.zip,
            street_name: clienteEncontrado.direccion.calle,
            street_number: clienteEncontrado.direccion.numero,
          },
          email: clienteEncontrado.correo,
        },
        payment_methods: [],
        items: itemsMP,
        // Si la transaccion fue exitosa o pendiente de pago entonces nos redireccionara automaticamente a la pagina en cuestion
        auto_return: "approved",
        // son las url que me llevaran al sitio si el pago fue :
        back_urls: {
          success: "http://localhost:3000/exito",
          pending: "http://localhost:3000/pendiente",
          failure: "http://localhost:3000/fallo",
        },
      });

      return {
        resultado: preferencia,
      };
    } catch (error) {
      console.log(error);
      return {
        error: error.message,
      };
    }
  }
}
