import { ProductosServices } from "./productos.service";
import { limpiarBD } from "../prisma";

describe("ProductosService", () => {
  describe("find", () => {
    it("deberia devolver una lista con todos los productos", async () => {
      const productos = await ProductosServices.find();

      expect(productos.length).toBe(0);
    });

    it("deberia devolver una lista con todos los productos si ya se ingreso uno", async () => {
      await ProductosServices.create({ nombre: "Papaya", precio: 1.8 });

      const productos = await ProductosServices.find();

      expect(productos.length).toBe(1);
    });
  });

  describe("create", () => {
    it("deberia arrojar un error si la data no es correcta", async () => {
      await expect(ProductosServices.create({ edad: 30 })).rejects.toThrowError(
        new Error("Error al crear el producto")
      );
    });

    it("deberia de crear un nuevo producto", async () => {
      const producto = await ProductosServices.create({
        nombre: "Platano de seda",
        precio: 1.5,
      });

      expect(producto).toHaveProperty("nombre", "Platano de seda");
    });
  });

  afterAll(() => {
    limpiarBD();
  });
});
