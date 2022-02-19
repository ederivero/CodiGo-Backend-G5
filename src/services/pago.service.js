import { preferences } from "mercadopago";

export class PagoService {
  static async generarPreferenciaDePago() {
    // https://www.mercadopago.com.pe/developers/es/reference/preferences/_checkout_preferences/post
    try {
      await preferences.create({
        payer: {
          name: "Eduardo", // obligatorio
          surname: "de Rivero", // obligatorio
          address: {
            zip_code: "04002",
            street_name: "Calle Los Platanitos",
            street_number: "123",
          },
          email: "ederiveroman@gmail.com",
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

        auto_return: "approved",
      });
    } catch (error) {
      console.log(error);
    }
  }
}
