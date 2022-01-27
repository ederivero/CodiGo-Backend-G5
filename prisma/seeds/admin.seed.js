export default async (prisma) => {
  await prisma.usuario.upsert({
    create: {
      nombre: "Eduardo",
      correo: "ederiveroman@gmail.com",
      password: "123456",
      tipoUsuario: "ADMIN",
    },
    update: {},
    where: {
      // solamente se pueden declarar las columnas que sean unicas (unique) o las pk
      correo: "ederiveroman@gmail.com",
    },
  });
};
