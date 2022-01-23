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

export const buscarCategoria = async (req, res) => {
  console.log(req.query);
  const params = req.query;
  // si en los params hay el estado entonces validar antes de pasar a prisma que si su valor es 'true' entonces sera true caso contrario sera false
  if (params.estado) {
    params.estado = params.estado === "true" ? true : false;
  }
  // SELECT * FROM categoria WHERE nombre = 'Lacteos' AND estado = true
  // SELECT * FROM categorias where nombre LIKE '%a%'
  // https://www.prisma.io/docs/concepts/components/prisma-client/filtering-and-sorting
  const categorias = await Prisma.categoria.findMany({
    // where: { nombre: { mode: "insensitive", contains: "LACTEOS" } },
    // where: {
    //     OR: [{ estado: false }, { nombre: "Lacteos" }, { nombre: "Proteinas" }],
    //   AND: [{ estado: true }, { nombre: "Golosinas" }],
    // },
    where: params,
  });

  return res.json({
    content: categorias,
  });
};

export const actualizarCategoria = async (req, res) => {
  const id = +req.params.id;
  try {
    await Prisma.categoria.findUnique({ where: { id: id } });

    const categoriaActualizada = await Prisma.categoria.update({
      data: req.body,
      where: { id },
    });

    return res.status(201).json({
      content: categoriaActualizada,
    });
  } catch (error) {
    console.log(error);
    // se dispara el catch cuando no se encuentre la categoria o cuando la informacion a actualizar sea incorrecta (cuando el tipo de dato no corresponda)
    return res.status(400).json({
      message: "Error al actualizar la categoria",
    });
  }
};
