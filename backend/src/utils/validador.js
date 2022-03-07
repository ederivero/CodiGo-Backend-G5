import jwt from "jsonwebtoken";

const verificarToken = (token) => {
  try {
    // aparte de validar si la token es valida tbn validara si tiene tiempo de vida, si esta correctamente firmada, y ademas si es de tipo JWT
    const payload = jwt.verify(token, process.env.SECRET_JWT);

    return payload;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
  }
};

export const validarUsuario = (req, res, next) => {
  // next > esto convierte a este controlador en un middleware que lo que hace es que si todo esta bien pasara al siguiente middleware o controlador
  // ingresamos a los headers y buscaremos si nos esta proveyendo el header de authorization
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: "Este request necesita una token",
    });
  }
  // Bearer asldkajsd.asdalkjsda.asdkahsdaj > ['Bearer', 'asldkajsd.asdalkjsda.asdkahsdaj']
  const token = req.headers.authorization.split(" ")[1];

  const resultado = verificarToken(token);

  if (typeof resultado === "object") {
    const { id } = resultado;

    req.user = id;

    next();
  } else {
    return res.status(401).json({
      message: "Error al hacer la peticion",
      content: resultado,
    });
  }
};
