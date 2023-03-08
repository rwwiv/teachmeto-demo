import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  for (let index = 0; index < 10; index++) {
    const row = await prisma.example.upsert({
      where: { compare: `${index}` },
      update: {},
      create: {
        compare: `${index}`,
      },
    });
    console.log({ row });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
