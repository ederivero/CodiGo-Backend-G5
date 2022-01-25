import Prisma from "@prisma/client";
const { PrismaClient } = Prisma;
import pluralize from "pluralize";
import snakeCase from "lodash.snakecase";

export const prisma = new PrismaClient();

export function limpiarBD() {
  const models = Reflect.ownKeys(prisma).filter((key) => key[0] !== "_");

  return Promise.all(
    models.map(async (modelKey) => {
      if (typeof modelKey === "string") {
        await prisma.$executeRawUnsafe(
          `TRUNCATE TABLE test.${pluralize.plural(
            snakeCase(modelKey)
          )} CASCADE;`
        );
      }
    })
  );
}
