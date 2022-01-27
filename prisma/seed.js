import Prisma from "@prisma/client";
import adminSeed from "./seeds/admin.seed.js";

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

async function main() {
  await Promise.all([adminSeed(prisma)]);
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    // siempre se ejecutara si fue correcto o incorrecto
    await prisma.$disconnect();
  });
