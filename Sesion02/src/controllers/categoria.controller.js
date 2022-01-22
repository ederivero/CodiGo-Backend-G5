import { Prisma } from "../prisma.js";

export const crearCategoria = async (req, res) => {
  // req.body => { nombre : 'Lacteos' }
  const data = req.body;
  const content = await Prisma.categoria.create({ data });
  return res.status(201).json({ content });
};

export const listarCategoria = async (req, res) => {
  // retorna un array de todas las categorias encontradas en la base de datos y opcionalmente le podremos pasar una condicional (where)
  const categorias = await Prisma.categoria.findMany({});

  return res.json({ content: categorias });
};
