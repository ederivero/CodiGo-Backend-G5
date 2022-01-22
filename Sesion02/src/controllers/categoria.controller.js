import { Prisma } from "../prisma.js";

export const crearCategoria = async (req, res) => {
  // req.body => { nombre : 'Lacteos' }
  const data = req.body;
  const content = await Prisma.categoria.create({ data });
  return res.json({ content });
};
