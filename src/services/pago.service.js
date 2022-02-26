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
        payment_methods: {
          // https://api.mercadopago.com/v1/payment_methods
          default_installments: 2, // el numero de cuotas por defecto que aparecera en el formulario
          installments: 3, // maximo numero de cuotas que puede sacar un usuuario con tarjeta de credito
          excluded_payment_methods: [
            {
              id: "diners",
            },
            {
              id: "debvisa",
            },
          ],
          excluded_payment_types: [
            // debit_card credit_card atm
            {
              id: "atm",
            },
          ],
        },
        items: itemsMP,
        // Si la transaccion fue exitosa o pendiente de pago entonces nos redireccionara automaticamente a la pagina en cuestion
        auto_return: "approved",
        // son las url que me llevaran al sitio si el pago fue :
        back_urls: {
          success: `${process.env.DOMINIO}/exito`,
          pending: `${process.env.DOMINIO}/pendiente`,
          failure: `${process.env.DOMINIO}/fallo`,
        },
        // Sera donde mercadopago hara el uso de notificaciones para informarme sobre el estado del pago
        notification_url: `${process.env.DOMINIO}/notificaciones`,
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

  static recibirNotificacion(data) {
    console.log("la data es: ");
    console.log(data);
  }
}
