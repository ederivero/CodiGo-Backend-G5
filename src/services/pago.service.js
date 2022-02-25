import mercadopago from "mercadopago";

export class PagoService {
  static async generarPreferenciaDePago() {
    // https://www.mercadopago.com.pe/developers/es/reference/preferences/_checkout_preferences/post
    try {
      const preferencia = await mercadopago.preferences.create({
        payer: {
          name: "Eduardo", // obligatorio
          surname: "de Rivero", // obligatorio
          address: {
            zip_code: "04002",
            street_name: "Calle Los Platanitos",
            street_number: 123,
          },
          email: "test_user_46542185@testuser.com",
          identification: {
            type: "DNI",
            number: "45678945",
          },
        },
        items: [
          {
            id: "1234",
            title: "zapatillas de running",
            quantity: 1,
            unit_price: 115.0,
            // https://es.wikipedia.org/wiki/ISO_4217
            currency_id: "PEN",
          },
        ],
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
