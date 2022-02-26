import { Comprobante } from "../models/comprobante.model.js";

export class FacturacionService {
  static async generarComprobante(data, tipo) {
    let tipo_de_comprobante;
    const { ref_doc } = data;
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
  }

  static async consultarComprobante(id) {}
}
