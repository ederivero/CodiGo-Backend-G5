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
      correo: "ederiveroman@gmail.com",
    },
  });
};
